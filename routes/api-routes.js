var reservations_data = require('../data/reservations.js');
var tables_data = require('../data/tables.js');

var express = require('express');
var path = require('path');

var app = express();
var PORT = 1337;

app.get("/api/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "../data/reservations.js"));
});

app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../data/tables.js"));
});



