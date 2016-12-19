var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user.js');

/* POST /api/logout */
router.post('/', function (req, res) {

  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(new User({
        id: new mongoose.Types.ObjectId
      }));
    }
  });
});


module.exports = router;