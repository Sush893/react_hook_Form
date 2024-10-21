// server.js (backend)
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// API route to handle form submission
app.post('/api/forms', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Form Data:', req.body); // Log the form data

  // Simulate saving data to the database or further processing
  res.json({ message: 'Form submitted successfully', data: req.body });
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
