// const restaurantModel = require('../models/restaurantModel');

// module.exports = {
//   getRestaurants: (req, res) => {
//     const restaurants = restaurantModel.getAllRestaurants();
//     res.render('index', { restaurants });
//   },
// };

// 
const restaurantModel = require('../models/restaurantModel');

module.exports = {
  getAllRestaurants: (req, res) => {
    const restaurants = restaurantModel.getAllRestaurants();
    res.render('index', { restaurants });
  },
  
  getRestaurantsByLocation: (req, res) => {
    const city = req.params.city;
    const restaurants = restaurantModel.getAllRestaurants().filter(restaurant => {
      return restaurant.city.toLowerCase() === city.toLowerCase();
    });
    res.render('index', { restaurants });
  }
};
