/**
 * Controller for user methods
 */
var config = require('../config/config');

/**
 * Create JSON response with the found user (req.user)
 */
exports.read = function(req, res) {
    res.json(req.user);
};

var users = [
    { name: "Beren" },
    { name: "Hugo" },
    { name: "Ingrid" }
];
/**
 * Create JSON response with all users
 */
exports.list = function(req, res) {

    console.log("voor nu geven we altijd dezelfde lijst terug met users");


    res.json(users);
};

/**
 * Function to lookup a particular user and store it in the request object
 * @param req - the request object
 * @param res - our response to the request
 * @param next - the next function that needs to be executed
 * @param userID - the userID from the URL
 */
exports.getUserByID = function(req, res, next, userID) {

    /** als we mongodb gebruiken dan gaan we in deze functie de user opzoeken */

    console.log("je zoekt de user met id: " + userID);

    console.log("voor nu geef ik je een standaard object terug");
    req.user = users[userID];


    /** de volgende Middleware/functie mag aan de slag */
    next();

};

var meetings = [];


exports.meetings = function(req, res) {

    /** als we mongodb gebruiken dan gaan we in deze functie de user opzoeken */

    console.log("this shit works");
    res.json(meetings);
};

exports.createmeetings = function(req, res) {

    console.log(req.body);
    meetings.push(req.body);
    res.json(meetings);
};