// Import required modules
const nanoid = require("nanoid"); // For generating unique IDs
const router = require("express").Router(); // Create an Express router
let notes = require("../db/db"); // Import notes from the database
const path = require("path"); // For working with file paths
const fs = require("fs"); // For file system operations

// Route to get all notes
router.get("/notes", (req, res) => {
    res.json(notes);
});

// Route to save a new note
router.post("/notes", (req, res) => {
    let request = req.body;
    req.body.id = nanoid(10); // Generate a unique ID
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes));
});

// Route to delete a note by its ID
router.delete("/notes/:id", (req, res) => {
    const { id } = req.params;
    let deletedNote = notes.find(note => note.id === id);
    if (deletedNote) {
        notes = notes.filter(note => note.id != id);
        res.end();
        res.status(200);
    } else {
        res.status(404);
    }
});

module.exports = router;
