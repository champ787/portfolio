const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

app.post('/api/incident', (req, res) => {
  console.log('Received incident:', req.body);
  // Simulate incident creation logic
  res.status(200).json({ message: 'Incident created successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
