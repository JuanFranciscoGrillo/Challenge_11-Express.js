// Import the necessary module to create an Express router
const router = require("express").Router();

// Import the 'path' module to work with file and directory paths
const path = require("path");

// Define a route for the root URL ("/")
router.get("/", (req, res) => {
    // Send the 'index.html' file located in the '../public' directory as a response
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Define a route for the "/notes" URL
router.get("/notes", (req, res) => {
    // Send the 'notes.html' file located in the '../public' directory as a response
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Export the router to be used in other parts of the application
module.exports = router;
