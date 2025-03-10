// const locationModel = require('../models/location');

// async function fetchAllLocations(req, res) {
//     try {
//         const locations = await locationModel.getAllLocations();
//         res.render('locations', { locations });
//     } catch (err) {
//         console.error("Error fetching locations:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// module.exports = { fetchAllLocations };

//locationController.js
const fs = require('fs');
const path = require('path');

// Fetch all locations from the JSON file
async function fetchAllLocations(req, res) {
    try {
        // Read the locations JSON file
        const data = fs.readFileSync(path.join(__dirname, '../JSON/locations.json'), 'utf-8');
        
        // Parse the JSON data
        const locations = JSON.parse(data);
        
        // Send the data as a JSON response
        res.json({ locations });
    } catch (err) {
        console.error("Error fetching locations:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { fetchAllLocations };
