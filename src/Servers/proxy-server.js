const express = require('express');  
const axios = require('axios');  
const cors = require('cors'); // Import the cors package  
  
const app = express();  
const port = 3001; // Use a different port than your React app  
  
app.use(cors()); // Use CORS middleware  
app.use(express.json());  
  
app.post('/api/incident', async (req, res) => {  
  try {  
    // Forward the request to the ServiceNow API  
    const response = await axios.patch('https://dev247641.service-now.com/api/1116658/create_new_record_pi/create_incident', req.body, {  
      auth: {  
        username: 'admin',  
        password: 'Pranjal@1998',  
      },  
      headers: {  
        'Content-Type': 'application/json',  
      }  
    });  
  
    res.json(response.data);  
  } catch (error) {  
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : 'Internal Server Error');  
  }  
});  
  
app.listen(port, () => {  
  console.log(`Proxy server running at http://localhost:${port}`);  
});  
