// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3000;

// const restaurantRoutes = require('./routes/restaurantRoutes');
// const locationRoutes = require('./routes/locationRoutes');
// const mealTypeRoutes = require('./routes/mealTypeRoutes');
// const userRoutes = require('./routes/userRoutes');

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Set view engine
// // app.set('view engine', 'json');
// // app.use(express.static('JSON'));

// // Routes
// app.use('/', restaurantRoutes);
// app.use('/', locationRoutes);
// app.use('/', mealTypeRoutes);
// app.use('/', userRoutes);

// // Start server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

const restaurantRoutes = require('./routes/restaurantRoutes');
const locationRoutes = require('./routes/locationRoutes');
const mealTypeRoutes = require('./routes/mealTypeRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', restaurantRoutes);
app.use('/', locationRoutes);
app.use('/', mealTypeRoutes);
app.use('/', userRoutes);
// Use user routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});