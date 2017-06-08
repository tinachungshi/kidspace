var express = require('express');
var methodOverride = require('method-override')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config();
require('./config/database');

var app = express();

// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(logger('dev'));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(require('./config/auth'));

// put API routes here, before the catch all route
app.use('/apis/toys', require('./routes/apis/toys'));
app.use('/apis/users', require('./routes/apis/users'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
