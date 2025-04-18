from flask import Flask, request, jsonify    
from flask_cors import CORS    
import pandas as pd    
from sklearn.feature_extraction.text import TfidfVectorizer    
from sklearn.naive_bayes import MultinomialNB    
from sklearn.pipeline import make_pipeline    
import nltk    
from nltk.corpus import stopwords    
    
nltk.download('stopwords')    
    
app = Flask(__name__)    
CORS(app)    
    
# Load data from CSV file    
df = pd.read_csv('incident_records.csv')    
print(df.head())   
  
# Preprocess text data    
stop_words = set(stopwords.words('english'))    
    
def preprocess_text(text):    
    return ' '.join([word for word in text.split() if word.lower() not in stop_words])    
  
# Combine short_description and caller_id    
def combine_features(row):  
    return preprocess_text(row['short_description']) + ' ' + str(row['caller_id'])  
  
df['combined_features'] = df.apply(combine_features, axis=1)  
  
# Train models for contact type, assigned to, urgency, and impact    
contact_type_model = make_pipeline(TfidfVectorizer(), MultinomialNB())    
contact_type_model.fit(df['combined_features'], df['contact_type'])    
    
assigned_to_model = make_pipeline(TfidfVectorizer(), MultinomialNB())    
assigned_to_model.fit(df['combined_features'], df['assigned_to'])    
    
urgency_model = make_pipeline(TfidfVectorizer(), MultinomialNB())    
urgency_model.fit(df['combined_features'], df['urgency'])    
    
impact_model = make_pipeline(TfidfVectorizer(), MultinomialNB())    
impact_model.fit(df['combined_features'], df['impact'])    
    
@app.route('/predict', methods=['POST'])    
def predict():  
    short_description = request.json.get('short_description', '')    
    caller_id = request.json.get('caller_id', '')  
  
    # Concatenate short_description and caller_id  
    combined_features = preprocess_text(short_description) + ' ' + str(caller_id)  
        
    # Get probability scores    
    contact_type_probs = contact_type_model.predict_proba([combined_features])[0]    
    assigned_to_probs = assigned_to_model.predict_proba([combined_features])[0]    
    urgency_probs = urgency_model.predict_proba([combined_features])[0]    
    impact_probs = impact_model.predict_proba([combined_features])[0]    
        
    # Map probabilities to class names    
    contact_type_scores = {cls: prob for cls, prob in zip(contact_type_model.classes_, contact_type_probs)}    
    assigned_to_scores = {cls: prob for cls, prob in zip(assigned_to_model.classes_, assigned_to_probs)}    
    urgency_scores = {cls: prob for cls, prob in zip(urgency_model.classes_, urgency_probs)}    
    impact_scores = {cls: prob for cls, prob in zip(impact_model.classes_, impact_probs)}    
        
    return jsonify({  
          
        'contact_type_scores': contact_type_scores,    
        'assigned_to_scores': assigned_to_scores,    
        'urgency_scores': urgency_scores,    
        'impact_scores': impact_scores    
    })    
    
if __name__ == '__main__':    
    app.run(debug=True)    
