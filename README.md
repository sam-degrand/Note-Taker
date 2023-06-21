# Note Taker

Note Taker is a web application that allows you to write and save notes. It provides a simple and intuitive interface for organizing your thoughts and keeping track of tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)

## Installation

To install and run the Note Taker application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.
5. Start the application by running `node server.js`.
6. Access the application in your web browser at `http://localhost:3000`.

## Usage

Upon accessing the application, you will be presented with a landing page that provides a link to the notes page. Clicking on the link will take you to a page where you can view existing notes and create new ones.

To create a new note, click on the empty fields on the right-hand side and enter a note title and its text. Once you've entered the content, a Save icon will appear in the navigation at the top of the page. Click on the Save icon to save the new note, and it will be added to the list of existing notes.

To view a specific note, click on the note in the left-hand column. The note will appear in the right-hand column, allowing you to read and edit its contents.

## Routes

The Note Taker application includes the following routes:

- `GET /notes`: Returns the notes.html file, which displays the notes page.
- `GET /api/notes`: Reads the db.json file and returns all saved notes as JSON.
- `GET /api/notes/:id`: Retrieves a specific note by ID and returns it as JSON.
- `POST /api/notes`: Receives a new note to save on the request body, adds it to the db.json file, and returns the new note to the client.
- `DELETE /api/notes/:id`: Deletes a note with the specified ID from the db.json file.
