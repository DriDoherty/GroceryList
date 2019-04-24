/////////////////////////////////////////////////////////////////
// Dependencies
/////////////////////////////////////////////////////////////////

var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

/////////////////////////////////////////////////////////////////
// Sets up the Express App
/////////////////////////////////////////////////////////////////

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/////////////////////////////////////////////////////////////////
// Sets the Express App listening
/////////////////////////////////////////////////////////////////

// Routes
require("./controllers/controller.js")(app);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});