var express = require('express');
var router = express.Router();

var SignUp = require('../models/login.js');

/* POST /api/signup */
router.post('/', function (req, res) {
  var login = new SignUp(req.body);

  var data = {
    message: 'Success'
  };

  login.save(function (err) {
    if(err) {
      res.status(500).send(err);
    } else {
      // 201 send no body
      res.status(201).json(data);
    }
  });
});


module.exports = router;