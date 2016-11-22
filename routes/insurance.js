var express = require('express');
var router = express.Router();

var InsuranceCarriers = require('../models/insurance-carriers.js');
var InsuranceBenefitLookup = require('../models/insurance-benefit-lookup.js');

/* GET /api/insurance/carriers listing. */
router.get('/carriers', function (req, res) {
  InsuranceCarriers.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

/* GET /api/insurance/benefit-lookup listing. */
router.get('/benefit-lookup', function (req, res) {
  InsuranceBenefitLookup.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data[0]);
    }
  });
});


module.exports = router;