var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Questionnaire = require('../models/questionnaire.js');

/* GET /api/issues/questionnaire listing. */
router.get('/', function (req, res) {
  Questionnaire.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});


/* GET /api/issues/questionnaire/id */
// we use findOne instead of findById due id is not mongo _id
router.get('/:id', function (req, res) {
  Questionnaire.findOne({id: req.params.id}, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});


/* PUT  /api/issues/questionnaire/id */
// we use findOneAndUpdate instead of findByIdAndUpdate due id is not mongo _id
router.put('/:id', function (req, res) {
  Questionnaire.findOneAndUpdate({id: req.params.id}, req.body, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      // set status 204 no content.
      res.status(204).json();
    }
  });
});

module.exports = router;