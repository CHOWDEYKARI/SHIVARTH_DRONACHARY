// const restaurantModel = require('../models/restaurant');

// async function fetchAllRestaurants(req, res) {
//     try {
//         const restaurants = await restaurantModel.getAllRestaurants();
//         res.render('restaurants', { restaurants });
//     } catch (err) {
//         console.error("Error fetching restaurants:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// async function fetchRestaurantsByCity(req, res) {
//     try {
//         const city = req.params.city;
//         const restaurants = await restaurantModel.getRestaurantsByCity(city);
//         res.json(restaurants);
//     } catch (err) {
//         console.error("Error fetching restaurants by city:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// async function fetchRestaurantsById(req, res) {
//     try {
//         const id = req.params.id;
//         const restaurant = await restaurantModel.getRestaurantsById(id);
//         res.json(restaurant);
//     } catch (err) {
//         console.error("Error fetching restaurant by ID:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// async function fetchFilteredRestaurants(req, res) {
//     try {
//         const filters = req.query;
//         const restaurants = await restaurantModel.filterRestaurants(filters);
//         res.json(restaurants);
//     } catch (err) {
//         console.error("Error fetching filtered restaurants:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// module.exports = { fetchAllRestaurants, fetchRestaurantsByCity, fetchRestaurantsById, fetchFilteredRestaurants };


// restaurantController.js
const fs = require('fs');
const path = require('path');

// Fetch all restaurants from the JSON file
async function fetchAllRestaurants(req, res) {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../JSON/restaurant.json'), 'utf-8');
        const restaurants = JSON.parse(data);
        res.json(restaurants);
    } catch (err) {
        console.error("Error fetching restaurants:", err);
        res.status(500).send("Internal Server Error");
    }
}

async function fetchRestaurantsByCity(req, res) {
    try {
        const city = req.params.city;
        const data = fs.readFileSync(path.join(__dirname, '../JSON/restaurant.json'), 'utf-8');
        const restaurants = JSON.parse(data).filter(restaurant => restaurant.city === city);
        res.json(restaurants);
    } catch (err) {
        console.error("Error fetching restaurants by city:", err);
        res.status(500).send("Internal Server Error");
    }
}

async function fetchRestaurantsById(req, res) {
    try {
        const id = req.params.id;
        const data = fs.readFileSync(path.join(__dirname, '../JSON/restaurant.json'), 'utf-8');
        const restaurant = JSON.parse(data).find(restaurant => restaurant.id == id);
        res.json(restaurant);
    } catch (err) {
        console.error("Error fetching restaurant by ID:", err);
        res.status(500).send("Internal Server Error");
    }
}

async function fetchFilteredRestaurants(req, res) {
    try {
        const filters = req.query;
        const data = fs.readFileSync(path.join(__dirname, '../JSON/restaurant.json'), 'utf-8');
        let restaurants = JSON.parse(data);
        if (filters.city) {
            restaurants = restaurants.filter(restaurant => restaurant.city === filters.city);
        }
        // Apply more filters here based on query parameters
        res.json(restaurants);
    } catch (err) {
        console.error("Error fetching filtered restaurants:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    fetchAllRestaurants,
    fetchRestaurantsByCity,
    fetchRestaurantsById,
    fetchFilteredRestaurants
};
