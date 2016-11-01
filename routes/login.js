var express = require('express');
var router = express.Router();

var Login = require('../models/login.js');

/* POST /api/user/login */
router.post('/', function (req, res) {
  var login = new Login(req.body);

  login.save(function (err) {
    if(err) {
      res.status(500).send(err);
    } else {
      // 204 send no body
      res.status(204).send();
    }
  });
});


module.exports = router;