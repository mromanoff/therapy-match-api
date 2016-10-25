var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Work = require('../models/work.js');

/* GET /api/work listing. */
router.get('/', function (req, res, next) {
  Work.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET /api/work/id */
router.get('/:id', function (req, res, next) {
  Work.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /api/work */
router.post('/', function (req, res, next) {
  Work.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/work/:id */
router.put('/:id', function (req, res, next) {
  Work.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/work/:id */
router.delete('/:id', function (req, res, next) {
  Work.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;