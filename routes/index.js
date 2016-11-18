var express = require('express');
var router = express.Router();

var stylesRoutes = require('./styles');
var providersRoutes = require('./providers');
var questionnaireRoutes = require('./questionnaire');
var locationRoutes = require('./location');
var insuranceCarriersRoutes = require('./insurance-carriers');
var insuranceDetailsRoutes = require('./insurance-details');
var loginRoutes = require('./login');
var logoutRoutes = require('./logout');
var signUpRoutes = require('./signUp');
var userRoutes = require('./user');

/** GET /health-check - Check service health */
router.get('/health-check', function(req, res) {
  res.send('OK');
});

router.use('/styles', stylesRoutes);
router.use('/providers', providersRoutes);
router.use('/issues/questionnaire', questionnaireRoutes);
router.use('/location', locationRoutes);
router.use('/insurance/carriers', insuranceCarriersRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signUpRoutes);
router.use('/user/insurance-details', insuranceDetailsRoutes);
router.use('/user/location', locationRoutes);
router.use('/user', userRoutes);

module.exports = router;
