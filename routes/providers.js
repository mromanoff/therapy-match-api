var express = require('express');
var router = express.Router();

var Providers = require('../models/provider.js');
var Contact = require('../models/contact-provider.js');

/* GET /api/providers listing. */
router.get('/', function (req, res) {
  Providers.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
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
      res.status(200).json(data);
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


/* POST  /api/providers/:id/contact?action=appointment|call */
router.post('/:id/contact', function (req, res, next) {
  console.log('params:', req.params);
  console.log('query:', req.query);
  var body = Object.assign({}, req.body, {providerId: req.params.id, type: req.query.action});

  Contact.create(body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});


module.exports = router;