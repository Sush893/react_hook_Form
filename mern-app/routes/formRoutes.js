const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Handle form submission logic
  const { name, email, password } = req.body;

  // Here you could add MongoDB interaction
  res.json({ message: 'Form submitted successfully', data: req.body });
});

module.exports = router;
