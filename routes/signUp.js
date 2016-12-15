var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

/* POST /api/signup */
router.post('/', function (req, res) {

  var user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save(function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({
        success: true,
        message: 'User logged in'
      });
    }
  });
});


module.exports = router;