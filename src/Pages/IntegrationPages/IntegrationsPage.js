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
  
ChartJS.register(  
    CategoryScale,  
    LinearScale,  
    BarElement,  
    Title,  
    Tooltip,  
    Legend  
);  
  
const IntegrationsPage = () => {  
    const [chartData, setChartData] = useState({});  
    const [mostRelevantContactType, setMostRelevantContactType] = useState('');  
    const [mostRelevantAssignedTo, setMostRelevantAssignedTo] = useState('');  
    const [mostRelevantUrgency, setMostRelevantUrgency] = useState('');  
    const [mostRelevantImpact, setMostRelevantImpact] = useState('');  
  
    const handleSubmit = async (values) => {  
        // Check if the description is empty  
        if (!values.description.trim()) {  
            alert('Description cannot be empty. Please provide a description.');  
            // Reload the page to reset any existing state  
            window.location.reload();  
            return;  
        }  
      
        try {  
            const response = await fetch('http://127.0.0.1:5000/predict', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json'  
                },  
                body: JSON.stringify({  
                    short_description: values.description,  
                    caller_id: 'Cathryn Nicolaus'  
                })  
            });  
            const result = await response.json();  
      
            const contactTypeScores = result.contact_type_scores;  
            const assignedToScores = result.assigned_to_scores;  
            const urgencyScores = result.urgency_scores;  
            const impactScores = result.impact_scores;  
      
            const bestContactType = Object.keys(contactTypeScores).reduce((a, b) => contactTypeScores[a] > contactTypeScores[b] ? a : b);  
            const bestAssignedTo = Object.keys(assignedToScores).reduce((a, b) => assignedToScores[a] > assignedToScores[b] ? a : b);  
            const bestUrgency = Object.keys(urgencyScores).reduce((a, b) => urgencyScores[a] > urgencyScores[b] ? a : b);  
            const bestImpact = Object.keys(impactScores).reduce((a, b) => impactScores[a] > impactScores[b] ? a : b);  
      
            setMostRelevantContactType(bestContactType);  
            setMostRelevantAssignedTo(bestAssignedTo);  
            setMostRelevantUrgency(bestUrgency);  
            setMostRelevantImpact(bestImpact);  
      
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
      
            // Call to create an incident in ServiceNow  
            await createServiceNowIncident(values.description, bestContactType, bestAssignedTo, bestUrgency, bestImpact);  
        } catch (error) {  
            console.error('Error fetching prediction:', error);  
        }  
    };  
     
  
    const createServiceNowIncident = async (description, contactType, assignedTo, urgency, impact) => {  
        try {  
            const response = await axios.post('http://localhost:3001/api/incident', {  
                short_description: description,  
                contact_type: contactType,  
                assigned_to: assignedTo,  
                urgency: urgency,  
                impact: impact,  
                caller_id: 'Cathryn Nicolaus'  
            });  
            alert('Incident created successfully');  
            console.log('Incident created:', response.data);  
        } catch (error) {  
            alert('Incident failed');  
            console.error('Error creating ServiceNow incident:', error);  
        }  
    };  
  
    return (  
        <div>  
            <h1>Outside Intelligence in ServiceNow</h1>  
  
            <Formik  
                initialValues={{ description: '' }}  
                onSubmit={handleSubmit}  
            >  
                {() => (  
                    <Form>  
                        <div>  
                            <label htmlFor="description" style={{ marginRight: '10px' }}>Issue Description:</label>  
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>  
                                <Field as="textarea"  
                                    id="description"  
                                    name="description"  
                                    style={{  
                                        width: '800px',  
                                        height: '100px',  
                                        resize: 'both',  
                                        overflow: 'auto',  
                                        boxSizing: 'border-box'  
                                    }}  
                                />  
                                <button type="submit" style={{ width: 'auto', marginTop: '10px', height: '30px' }}>Predict & Create Incident</button>  
                            </div>  
                        </div>  
                    </Form>  
                )}  
            </Formik>  
  
            {Object.keys(chartData).length > 0 && (  
                <div>  
                    <h2>Prediction Scores</h2>  
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>  
                        <div style={{ flex: '1 1 200px', margin: '10px' }}>  
                            <Bar   
                                data={chartData.contactType}   
                                options={{   
                                    responsive: true,   
                                    plugins: {   
                                        legend: { position: 'top' },   
                                        title: { display: true, text: 'Contact Type Scores' }   
                                    }   
                                }}   
                            />  
                        </div>  
                        <div style={{ flex: '1 1 350px', margin: '10px' }}>  
                            <Bar   
                                data={chartData.assignedTo}   
                                options={{   
                                    responsive: true,   
                                    plugins: {   
                                        legend: { position: 'top' },   
                                        title: { display: true, text: 'Assigned To Scores' }   
                                    }   
                                }}   
                            />  
                        </div>  
                        <div style={{ flex: '1 1 200px', margin: '10px' }}>  
                            <Bar   
                                data={chartData.urgency}   
                                options={{   
                                    responsive: true,   
                                    plugins: {   
                                        legend: { position: 'top' },   
                                        title: { display: true, text: 'Urgency Scores' }   
                                    }   
                                }}   
                            />  
                        </div>  
                        <div style={{ flex: '1 1 200px', margin: '10px' }}>  
                            <Bar   
                                data={chartData.impact}   
                                options={{   
                                    responsive: true,   
                                    plugins: {   
                                        legend: { position: 'top' },   
                                        title: { display: true, text: 'Impact Scores' }   
                                    }   
                                }}   
                            />  
                        </div>  
                    </div>  
                    <div>  
                        <h2>Most Relevant Results</h2>  
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
  
export default IntegrationsPage;  