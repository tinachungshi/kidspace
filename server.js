var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config();
// for mongoose
require('./config/database');

var app = express();

app.use(logger('dev'));

// configure both serve-favicon and static middlewares to serve from the production build folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// put API routes here, before the catch all route
app.use('/apis/toys', require('./routes/apis/toys'));
app.use('/apis/users', require('./routes/apis/users'));

// The following catch all route is necessary for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 instead of 3000 during dev
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
