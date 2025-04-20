const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/incident', async (req, res) => {
  try {
    const {
      short_description,
      contact_type,
      assigned_to,
      urgency,
      impact,
      caller_id,
      pdi_url,
      username,
      password
    } = req.body;

    if (!pdi_url || !username || !password) {
      return res.status(400).json({ error: 'Missing PDI URL or credentials' });
    }

    const payload = {
      short_description,
      contact_type,
      assigned_to,
      urgency,
      impact,
      caller_id
    };

    const response = await axios.patch(`${pdi_url}/api/1116658/create_new_record_pi/create_incident`, payload, {
      auth: {
        username,
        password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error from ServiceNow:', error.response?.data || error.message);
    res.status(error.response ? error.response.status : 500).json(
      error.response ? error.response.data : { error: 'Internal Server Error' }
    );
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
