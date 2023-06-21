// Import required modules
const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// Create Express application
const app = express();
const port = process.env.PORT || 3000;
const mainDir = path.join(__dirname, "/public");

// Set up middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Route to serve the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDir, "notes.html"));
});

// Route to get all notes from the JSON file
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

// Route to get a specific note by ID
app.get("/api/notes/:id", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(savedNotes[Number(req.params.id)]);
});

// Default route that serves the homepage
app.get("*", function(req, res) {
    res.sendFile(path.join(mainDir, "index.html"));
});

// Route to create a new note
app.post("/api/notes", function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    newNote.id = uuidv4(); // Generate a unique ID using uuidv4
    savedNotes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Note saved to db.json. Content: ", newNote);
    res.json(savedNotes);
});