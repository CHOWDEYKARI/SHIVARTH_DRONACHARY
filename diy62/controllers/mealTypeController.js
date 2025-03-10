// const mealTypeModel = require('../models/mealType');

// async function fetchAllMealTypes(req, res) {
//     try {
//         const mealTypes = await mealTypeModel.getAllMealTypes();
//         res.render('mealTypes', { mealTypes });
//     } catch (err) {
//         console.error("Error fetching meal types:", err);
//         res.status(500).send("Internal Server Error");
//     }
// }

// module.exports = { fetchAllMealTypes };

// mealTypeController.js
const fs = require('fs');
const path = require('path');

// Fetch all meal types from the JSON file
async function fetchAllMealTypes(req, res) {
    try {
        // Read the mealType JSON file asynchronously
        fs.readFile(path.join(__dirname, '../JSON/mealType.json'), 'utf-8', (err, data) => {
            if (err) {
                console.error("Error fetching meal types:", err);
                return res.status(500).send("Internal Server Error");
            }
            
            // Parse the JSON data
            const mealTypes = JSON.parse(data);
            
            // Send the data as a JSON response
            res.json({ mealTypes });
        });
    } catch (err) {
        console.error("Error fetching meal types:", err);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { fetchAllMealTypes };
