const express = require('express');
const router = express.Router();
const mealTypeController = require('../controllers/mealTypeController');

router.get('/mealTypes', mealTypeController.fetchAllMealTypes);

module.exports = router;
