var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');

var app = express();

// look at the issue: https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/therapy-match', function (err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('mongodb connection successful');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var corsOptions = {
  origin: 'http://localhost:4000',
  methods: ['GET', 'PUT', 'POST'],
  credentials: true,
  maxAge: 600,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// enable CORS - Cross Origin Resource Sharing
app.use(cors(corsOptions));

var sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false,
    path:'/'
  }
};

app.use(session(sessionOptions));

// mount all routes on /api path
app.use('/api', routes);

module.exports = app;
