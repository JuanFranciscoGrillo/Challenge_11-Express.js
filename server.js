// Import required modules
const express = require('express');
const app = express(); // Create Express app instance

// Import custom route modules
const api_Routes = require('./routes/apiroutes');
const html_Routes = require('./routes/htmlroutes');

// Set the server port
const PORT = process.env.PORT || 3001;

// Middleware for parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use API and HTML routes
app.use('/api', api_Routes);
app.use('/', html_Routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
