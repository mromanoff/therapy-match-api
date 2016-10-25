var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var contact = require('../models/contact.js');

/* GET /api/contact listing. */
router.get('/', function (req, res, next) {
  contact.find(function (err, contacts) {
    if (err) return next(err);
    res.json(contacts);
  });
});

/* GET /api/contact/id */
router.get('/:id', function (req, res, next) {
  contact.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /api/contact */
router.post('/', function (req, res, next) {
  contact.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/contact/:id */
router.put('/:id', function (req, res, next) {
  contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/contact/:id */
router.delete('/:id', function (req, res, next) {
  contact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;