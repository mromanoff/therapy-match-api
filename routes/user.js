var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/user.js');

/* GET /api/user  */
router.get('/:id', function (req, res) {
  User.findOne({
    id: req.params.id
  }, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(200).json(new User({
          id: new mongoose.Types.ObjectId
        }));
      }
    }
  });
});

/* PUT  /api/user */
router.put('/:id', function (req, res) {
  User.findOneAndUpdate({
      id: req.params.id
    },
    req.body,
    {
      runValidators: true,
      new: true
    },
    function (err, data) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(data);
      }
    });
});

/* POST /api/user . */
// router.post('/', function (req, res) {
//   var user = new User(req.body);
//
//   user.save(function (err, data) {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       // 201 created
//       res.status(201).json(data);
//     }
//   });
// });


module.exports = router;