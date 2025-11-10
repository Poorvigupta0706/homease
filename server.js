const express = require('express');
const cors = require('cors');
const househelpRoutes = require('./routes/househelp'); // Import househelp routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/househelps', househelpRoutes); // Register househelp routes

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});