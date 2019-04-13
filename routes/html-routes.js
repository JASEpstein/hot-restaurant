var reservations_data = require('../data/reservations.js');
var tables_data = require('../data/tables.js');

var express = require('express');
var path = require('path');

var app = express();
var PORT = 1337;



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/reservations.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservations.html"));
});

app.get("/tables.html", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
});