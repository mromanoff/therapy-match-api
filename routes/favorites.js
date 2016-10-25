var express = require('express');
var router = express.Router();

//var Favorites = require('../models/favorites.js');
var Providers = require('../models/provider.js');


/* GET /api/user/favorites */
router.get('/', function (req, res) {
  var query = {};

  if(req.query.gender) {
    query.gender =  req.query.gender;
  } else if (req.query.age) {
    query.age =  req.query.age;
  }

  Providers.find(query, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;