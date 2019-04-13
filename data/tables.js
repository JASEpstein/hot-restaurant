var reservations = require("./reservations.js");

var tables = [];

for(var i = 0; i < 5; i++){
  tables.push(reservations[i]);
}

module.exports = tables;