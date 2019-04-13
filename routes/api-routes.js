var reservations = require("../data/reservations.js");
var path = require("path");

module.exports = function(app) {

    app.get("/api/tables", function (req, res) {
        var tables = [];

        for(var i = 0; i < reservations.length; i++){
            if(i < 5){
                tables.push(reservations[i]);
            }
        };

        res.json(tables);
    });

    app.get("/api/waitlist", function (req, res) {
        var waitlist = [];

        for(var i = 0; i < reservations.length; i++){
            if(i > 5){
                waitlist.push(reservations[i]);
            }
        };
        res.json(waitlist);
    });


    
    app.post("/api/reservations", function(req, res) {
        var newReservation = req.body;

        console.log(newReservation);

        reservations.push(newReservation);

        if (reservations < 5) {
            res.json(true);
        } else {
            res.json(false);
        }
    });
}
