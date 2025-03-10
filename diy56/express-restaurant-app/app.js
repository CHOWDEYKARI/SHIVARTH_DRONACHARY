const express = require('express');
const restaurantController = require('./controllers/restaurantController');
const locationController = require('./controllers/locationController');
const mealtypeController = require('./controllers/mealtypeController');

const app = express();
const PORT = 8901;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/location', locationController.getLocations);
app.get('/meals', mealtypeController.getMealTypes);

app.get('/getAllRestaurants', restaurantController.getAllRestaurants);

app.get('/getRestaurantsByLocation/:city', restaurantController.getRestaurantsByLocation);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
