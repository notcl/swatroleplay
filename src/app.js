const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  // Send index.html
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Route for /comingsoon URL
app.get('/comingsoon', (req, res) => {
  // Send comingsoon.html
  res.sendFile(path.join(__dirname, '..', 'public', 'comingsoon.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
