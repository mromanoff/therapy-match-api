var express = require('express');
var router = express.Router();

var Location = require('../models/location.js');


/* POST /api/location */
router.post('/', function (req, res) {
  var location = new Location(req.body);

  location.save(function (err, data) {
    if(err) {
      res.status(500).send(err);
    } else {
      // 201 created
      res.status(201).json(data);
    }
  });
});


module.exports = router;