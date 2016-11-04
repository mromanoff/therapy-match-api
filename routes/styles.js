var express = require('express');
var router = express.Router();

var StyleDescriptors = require('../models/style-descriptors.js');
var Styles = require('../models/styles.js');


/* POST /api/styles . */
router.post('/', function (req, res) {
  var styles = new Styles(req.body);

  styles.save(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      // 201 created
      res.status(201).json(data);
    }
  });
});


/* GET /api/styles/descriptors  */
router.get('/descriptors', function (req, res) {
  StyleDescriptors.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});


module.exports = router;