var express = require('express');
var router = express.Router();

var User = require('../models/user.js');


/* GET /api/user  */
router.get('/', function (req, res) {
  User.find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data[0]);
    }
  });
});

/* PUT  /api/user */
router.put('/', function (req, res) {

  User.findOneAndUpdate({name:req.params.name}, req.body, {runValidators: false, new: true}, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });


  // User.update(req.body, function (err, data) {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     // set status 200 no content.
  //     res.status(200).json(data[0]);
  //   }
  // });
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