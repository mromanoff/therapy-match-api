var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user.js');

/* POST /api/signup */
router.post('/', function (req, res) {

  User.findOne({
    email: req.body.email
  }, function (err, user) {

    if (err) {
      res.status(500).send(err);
    }

    if (user) {
      //TODO: return 409 if user name already exists
      res.status(409).json({
        message: "This name already exist. Please try another name."
      });
    } else {

      var id = new mongoose.Types.ObjectId;

      var newUser = new User({
        email: req.body.email,
        password: req.body.password,
        id: id
      });

      newUser.save(function (err) {
        if (err) {
          res.status(500).send(err);
        } else {
          // res.status(200).json({
          //   message: 'User signed up'
          // });
          res.status(200).json(new User({
            email: req.body.email,
            id: id
          }));
        }
      });
    }
  });
});

module.exports = router;