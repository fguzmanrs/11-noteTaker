const fs = require("fs")
const path = require("path");

var notes;

module.exports = function (app) {
    fs.readFile("db.json", "utf8", function (err, data) {
        if (err) throw err;
        notes = JSON.parse(data);
    })

    // Get all notes
    app.get("/api/notes", function (req, res) {
        console.log(notes);
        res.json(notes);
    });

    // Save a new note
    app.post("/api/notes", function (req, res) {
        console.log("test");
        var newNote = req.body;
        nData.push(newNote);
        let parsedata = JSON.stringify(notes)
        fs.writeFile(path.join('db.json'), parsedata, (err) => {
            if (err) throw err;
        })
        console.log(notes);
        res.json(notes);
    });

    // Delete a post - app.delete function 
};
