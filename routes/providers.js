var express = require('express');
var router = express.Router();

var Providers = require('../models/provider.js');
var ContactProvider = require('../models/contact-provider.js');

/* GET /api/new-providers listing. */
router.get('/', function (req, res) {
  var query = {};

  var pageObject = {
    providers: [],
    totalItemsCount: 0,
    page: parseInt(req.query.page, 10) || 0,
    itemsCountPerPage: req.query.limit || 5
  };

  //sanitize user query
  //GET /api/providers?isFavorite=true|false
  if (req.query.isFavorite) {
    query.isFavorite = req.query.isFavorite;
  }

  //sanitize user query
  //GET /api/providers?gender=male|female|all
  if (req.query.gender) {
    if (req.query.gender === 'all') {
      // we don't need to pass 'gender=all' with query.
      delete req.query.gender;
    } else {
      query.gender = req.query.gender;
    }
  }

  //sanitize user query
  //GET /api/providers?isInNetwork=true|false
  if (req.query.isInNetwork) {
    if (req.query.isInNetwork === 'false') {
      // we don't need to pass 'isInNetwork=false' with query.
      delete req.query.isInNetwork;
    } else {
      query.isInNetwork = req.query.isInNetwork;
    }
  }

  // Get all providers count
  Providers.count(query, function (err, count) {
    pageObject.totalItemsCount = count;
  });


  Providers.find(query)
    .skip(pageObject.page * pageObject.itemsCountPerPage)
    .limit(pageObject.itemsCountPerPage)
    .exec(function (err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        pageObject.providers = data;
        res.status(200).json([pageObject]);
      }
    });
});

/* GET /api/providers/id */
// we use findOne instead of findById due id is not mongo _id
router.get('/:id', function (req, res) {
  Providers.findOne({id: req.params.id}, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {

      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(400).send({message: 'provider not found'});
      }
    }
  });
});

/* PUT  /api/providers/id */
// we use findOneAndUpdate instead of findByIdAndUpdate due id is not mongo _id
router.put('/:id', function (req, res) {
  Providers.findOneAndUpdate({id: req.params.id}, req.body, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      // set status 204 no content.
      res.status(204).json();
    }
  });
});

/* POST  /api/providers/:id/contact */
router.post('/:id/contact', function (req, res) {
  console.log('params:', req.params);
  var body = Object.assign({}, req.body, {providerId: req.params.id});
  var contactProvider = new ContactProvider(body);

  contactProvider.save(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      // set status 201.
      res.status(201).json(data);
    }
  });
});


module.exports = router;