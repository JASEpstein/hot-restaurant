var express = require("express");
var path = require("path");

var reservations = require("./data/reservations.js");
var tables = require("./data/tables.js");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.post("/api/reservations", function(req, res) {
  var newReservation = req.body;

  console.log(newReservation);

  reservations.push(newReservation);
  res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

console.log(tables);
