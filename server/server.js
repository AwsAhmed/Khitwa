var express = require('express');
var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "khatwa"
mongoose.connect('mongodb://localhost/Khitwa');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);
console.log('listen to ');

// export our app for testing and flexibility, required by index.js
module.exports = app;
