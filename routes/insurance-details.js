var express = require('express');
var router = express.Router();

var InsuranceDetails = require('../models/insurance-details.js');

/* POST /api/user/insurance-details */
router.post('/', function (req, res) {
  var insuranceDetails = new InsuranceDetails(req.body);

  insuranceDetails.save(function (err, data) {
    if(err) {
      res.status(500).send(err);
    } else {
      // 201 created
      res.status(201).json(data);
    }
  });
});


module.exports = router;