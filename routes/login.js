var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user.js');

/* POST /api/login */
router.post('/', function (req, res) {

  User.findOne({
    email: req.body.email
  }, function (err, user) {

    if (err) {
      res.status(500).send(err);
    }

    if (!user) {
      res.status(401).json({message: 'Authentication failed. User not found.'});
    } else if (user) {
      if (user.password != req.body.password) {
        res.status(401).json({message: 'Authentication failed. Wrong password.'});
      } else {
        res.status(200).json(user);
      }
    }
  });
});


module.exports = router;