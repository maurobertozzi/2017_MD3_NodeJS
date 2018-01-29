/*
main application file. Starting point of the backend
 */

// init environment variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'), // require web framework
    config = require('./config/config'),
    port = config.port;

// init web framework
var app = express();

// start listening on a port
app.listen(port);

module.exports = app;

console.log('Server running at http://localhost:' + port + '/');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'santa cat' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});
