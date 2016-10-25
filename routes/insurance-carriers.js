var express = require('express');
var router = express.Router();

var InsuranceCarriers = require('../models/insurance-carriers.js');

/* GET /api/insurance listing. */
router.get('/', function (req, res) {
  InsuranceCarriers.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;