/**
 * Configuration for the websever (express). Routing, middleware
 */
var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function() {

    /** create the express app */
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        /** hier gaan we straks specifieke development middleware koppelen (bijvoorbeeld een logger) */
    } else if (process.env.NODE_ENV === 'production') {
        /** hier gaan we straks specifieke productie middleware koppelen (bijvoorbeeld compressie) */
    }

    /**
     * Add required headers
     */
    app.use(function(req, res, next) {

        /** todo: niet meer iedereen toegang geven met een wildcard */
        res.setHeader('Access-Control-Allow-Origin', '*');

        /** setup REST actions */
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');

        /** Request headers you wish to allow */
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

        res.setHeader('Access-Control-Allow-Credentials', true);

        next();
    });

    app.use(function(req, res, next) {
        console.log("pizza");

        next();
    });

    /** Dit zorgt ervoor dat we bij de variabelen kunnen die gepost zijn zoals je in PHP bij $_POST mag */
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**
     * add json middleware as body parser
     */
    app.use(bodyParser.json());

    /**
     * enable PUT/DELETE REST
     */
    app.use(methodOverride());

    /**
     * include all routing configuration
     */
    require('../routes/user.routes.js')(app);

    // export the express app
    return app;
};