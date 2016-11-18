var express = require('express');
var router = express.Router();

var Providers = require('../models/new-provider.js');

/* GET /api/new-providers listing. */
router.get('/', function (req, res) {
  var query = {};

  var pageOptions = {
    page: req.query.page || 0,
    limit: req.query.limit || 2
  };

  //sanitize user query
  //GET /api/providers?isFavorite=true|false
  if (req.query.isFavorite) {
    query.isFavorite = req.query.isFavorite;
  }

  //sanitize user query
  //GET /api/providers?isInNetwork=true|false
  if (req.query.isInNetwork) {
    query.isInNetwork = req.query.isInNetwork;
  }

  Providers.find(query)
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(data);
      }
    });
});

/* GET /api/new-providers/id */
// we use findOne instead of findById due id is not mongo _id
router.get('/:id', function (req, res) {
  Providers.findOne({id: req.params.id}, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;