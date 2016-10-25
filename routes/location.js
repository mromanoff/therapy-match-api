var express = require('express');
var router = express.Router();

var location = require('../models/location.js');

/* POST /api/location */
router.post('/', function (req, res, next) {
  location.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;