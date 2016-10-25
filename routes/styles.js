var express = require('express');
var router = express.Router();

var Styles = require('../models/style.js');

/* GET /api/styles listing. */
router.get('/', function (req, res) {
  Styles.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});


module.exports = router;