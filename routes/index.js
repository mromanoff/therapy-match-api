var express = require('express');
var router = express.Router();

var workRoutes = require('./work');
var contactsRoutes = require('./contact');
var stylesRoutes = require('./styles');
var providersRoutes = require('./providers');
var questionnaireRoutes = require('./questionnaire');
var locationRoutes = require('./location');
var insuranceCarriersRoutes = require('./insurance-carriers');
var insuranceDetailsRoutes = require('./insurance-details');
var favoritesRoutes = require('./favorites');

/** GET /health-check - Check service health */
router.get('/health-check', function(req, res) {
  res.send('OK');
});

router.use('/work', workRoutes);
router.use('/contact', contactsRoutes);
router.use('/styles/descriptors', stylesRoutes);
router.use('/styles/providers', providersRoutes);
router.use('/providers', providersRoutes);
router.use('/issues/questionnaire', questionnaireRoutes);
router.use('/location', locationRoutes);
router.use('/insurance/carriers', insuranceCarriersRoutes);
router.use('/user/favorites', favoritesRoutes);
router.use('/user/insurance-details', insuranceDetailsRoutes);

module.exports = router;
