var express = require('express');
var router = express.Router();

var Logout = require('../models/logout.js');

/* POST /api/user/login */
router.post('/', function (req, res) {
  var logout = new Logout(req.body);

  logout.save(function (err) {
    if(err) {
      res.status(500).send(err);
    } else {
      // 204 send no body
      res.status(204).send();
    }
  });
});


module.exports = router;