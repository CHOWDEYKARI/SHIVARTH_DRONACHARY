// const express = require('express');
// const router = express.Router();
// const restaurantController = require('../controllers/restaurantController');

// router.get('/restaurants', restaurantController.fetchAllRestaurants);
// router.get('/restaurants/city/:city', restaurantController.fetchRestaurantsByCity);
// router.get('/restaurants/id/:id', restaurantController.fetchRestaurantsById);
// router.get('/restaurants/filter', restaurantController.fetchFilteredRestaurants);

// module.exports = router;


const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Make sure these function names are correct and exist in the controller
router.get('/restaurants', restaurantController.fetchAllRestaurants);
router.get('/restaurants/city/:city', restaurantController.fetchRestaurantsByCity);
router.get('/restaurants/id/:id', restaurantController.fetchRestaurantsById);
router.get('/restaurants/filter', restaurantController.fetchFilteredRestaurants);

module.exports = router;
