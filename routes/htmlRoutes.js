
var path = require("path");

module.exports = function(app) {

    app.get("/public/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "/notes.html"));
    });

    app.get("../public/assets/js/index.js", function(req,res){
        res.sendFile(path.join(__dirname, "/assets/js/index.js"))
    });
    app.get("../public/assets/css/styles.css", function(req,res){
        res.sendFile(path.join(__dirname, "/assets/css/styles.css"))
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/index.html"));
      });
}