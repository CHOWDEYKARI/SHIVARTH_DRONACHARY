var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Serve static files from the 'Assets' directory
app.use(express.static('Assets'));

// Load JSON data
var restaurantData = require("./JSONS/restaurant.json");
var locationData = require("./JSONS/location.json");
var mealsData = require("./JSONS/mealtype.json");
var msgData = require("./JSONS/msg.json");

// Middleware
app.use(bodyParser.json());

// POST route to post restaurant data
app.post("/postRestaurants", (req, res) => {
    console.log(req.body);
    res.send(msgData);
    console.log("Data posted successfully");
});

// GET route to fetch all restaurants
app.get("/getAllRestaurants", (req, res) => {
    res.send(restaurantData);
});

// GET route to fetch all locations
app.get("/getAllLocations", (req, res) => {
    res.send(locationData);
});

// GET route to fetch restaurants by location
app.get("/getRestaurantsByLocation/:location", (req, res) => {
    const location = req.params.location;
    const filteredRestaurants = restaurantData.filter(restaurant => restaurant.city === location);
    if (filteredRestaurants.length > 0) {
        res.send(filteredRestaurants);
    } else {
        res.status(404).send("No restaurants found in the specified location.");
    }
});

// GET route to fetch all meal types
app.get("/getAllMeals", (req, res) => {
    res.send(mealsData);
});

// Start the server
const port = 8900;
app.listen(port, () => {
    console.log("Successfully loaded");
    console.log(`Restaurants app listening on port ${port}!`);
});
