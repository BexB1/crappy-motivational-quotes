var express = require("express");
var morgan = require("morgan");
var expressLayouts = require('express-ejs-layouts');

var app = express();

app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.set("index")
app.set("about")

app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.use(expressLayouts);

app.get("/", function(req, res){
  res.render("index", {  });
});

app.get("/about", function(req, res) {
  console.log("This shit loading, too?");
  res.render("about", { message: "This is the about page." });
});

app.get("*", function(req, res) {
  res.status(404).end("Error: page not found.");
});

app.listen(8000, function() {
  console.log("Express is listening on port 8000.");
});


