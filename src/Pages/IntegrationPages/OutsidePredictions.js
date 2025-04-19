import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OutsidePredictions = () => {
  const [chartData, setChartData] = useState({});
  const [mostRelevantContactType, setMostRelevantContactType] = useState('');
  const [mostRelevantAssignedTo, setMostRelevantAssignedTo] = useState('');
  const [mostRelevantUrgency, setMostRelevantUrgency] = useState('');
  const [mostRelevantImpact, setMostRelevantImpact] = useState('');

  const handleSubmit = async (values) => {
    if (!values.description.trim()) {
      alert('Description cannot be empty. Please provide a description.');
      window.location.reload();
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          short_description: values.description,
          caller_id: 'Cathryn Nicolaus',
        }),
      });
      const result = await response.json();

      const {
        contact_type_scores: contactTypeScores,
        assigned_to_scores: assignedToScores,
        urgency_scores: urgencyScores,
        impact_scores: impactScores,
      } = result;

      const best = (scores) =>
        Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

      setMostRelevantContactType(best(contactTypeScores));
      setMostRelevantAssignedTo(best(assignedToScores));
      setMostRelevantUrgency(best(urgencyScores));
      setMostRelevantImpact(best(impactScores));

      setChartData({
        contactType: {
          labels: Object.keys(contactTypeScores),
          datasets: [
            {
              label: 'Contact Type Scores',
              data: Object.values(contactTypeScores),
              backgroundColor: 'rgba(255, 159, 64, 0.6)',
            },
          ],
        },
        assignedTo: {
          labels: Object.keys(assignedToScores),
          datasets: [
            {
              label: 'Assigned To Scores',
              data: Object.values(assignedToScores),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
          ],
        },
        urgency: {
          labels: Object.keys(urgencyScores),
          datasets: [
            {
              label: 'Urgency Scores',
              data: Object.values(urgencyScores),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
          ],
        },
        impact: {
          labels: Object.keys(impactScores),
          datasets: [
            {
              label: 'Impact Scores',
              data: Object.values(impactScores),
              backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
          ],
        },
      });

      await createServiceNowIncident(
        values.description,
        best(contactTypeScores),
        best(assignedToScores),
        best(urgencyScores),
        best(impactScores)
      );
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  const createServiceNowIncident = async (
    description,
    contactType,
    assignedTo,
    urgency,
    impact
  ) => {
    try {
      const response = await axios.post('http://localhost:3001/api/incident', {
        short_description: description,
        contact_type: contactType,
        assigned_to: assignedTo,
        urgency,
        impact,
        caller_id: 'Cathryn Nicolaus',
      });
      alert('Incident created successfully');
      console.log('Incident created:', response.data);
    } catch (error) {
      alert('Incident failed');
      console.error('Error creating ServiceNow incident:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        🌐 Outside Intelligence in ServiceNow
      </h1>

      <Formik initialValues={{ description: '' }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <label
                htmlFor="description"
                style={{ display: 'block', fontSize: '18px', marginBottom: '10px' }}
              >
                Describe the Issue:
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Enter the issue description..."
                style={{
                  width: '80%',
                  minHeight: '120px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  resize: 'vertical',
                }}
              />
              <br />
              <button
                type="submit"
                style={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  fontSize: '16px',
                  borderRadius: '6px',
                  backgroundColor: '#2980b9',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                🔍 Predict & Create Incident
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {Object.keys(chartData).length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h2 style={{ textAlign: 'center', color: '#34495e' }}>📊 Prediction Scores</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {['contactType', 'assignedTo', 'urgency', 'impact'].map((key) => (
              <div key={key} style={{ width: '300px' }}>
                <Bar
                  data={chartData[key]}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'top' },
                      title: { display: true, text: chartData[key].datasets[0].label },
                    },
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '40px',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: '#f8f9fa',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ marginBottom: '20px' }}>🧠 Most Relevant Predictions</h2>
            <p><strong>Contact Type:</strong> {mostRelevantContactType}</p>
            <p><strong>Assigned To:</strong> {mostRelevantAssignedTo}</p>
            <p><strong>Urgency:</strong> {mostRelevantUrgency}</p>
            <p><strong>Impact:</strong> {mostRelevantImpact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutsidePredictions;
