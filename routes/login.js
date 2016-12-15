var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

/* POST /api/user/login */
router.post('/', function (req, res) {

  User.findOne({
    email: req.body.email
  }, function (err, user) {

    if (err) {
      res.status(500).send(err);
    }
    if (!user) {
      res.json({success: false, message: 'Authentication failed. User not found.'});
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({success: false, message: 'Authentication failed. Wrong password.'});
      } else {
        // return the information including token as JSON
        res.status(200).json({
          success: true,
          message: 'Enjoy your token!'
        });
      }
    }
  });
});


module.exports = router;