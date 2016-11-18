var express = require('express');
var router = express.Router();

var User = require('../models/user.js');


/* POST /api/user . */
router.post('/', function (req, res) {
  var user = new User(req.body);

  user.save(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      // 201 created
      res.status(201).json(data);
    }
  });
});


/* GET /api/user/:id */
// we use findOne instead of findById due id is not mongo _id
router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});



/* GET /api/user  */
router.get('/', function (req, res) {
  User.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});


module.exports = router;