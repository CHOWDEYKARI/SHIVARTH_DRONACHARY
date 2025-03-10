const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017/";
const dbName = "61";
const client = new MongoClient(url);

async function findRestaurants() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to server");

        // Get the database and collection
        const db = client.db(dbName);
        const collection = db.collection('restaurants');

        // Find restaurants with min_price > 300 and < 600
        const query = { min_price: { $gt: 300, $lt: 600 } };
        const options = { projection: { _id: 0, name: 1, min_price: 1 } }; // Optionally project only necessary fields
        const restaurants = await collection.find(query, options).toArray();

        // Print the results
        console.log("Restaurants with min_price > 300 and < 600:");
        console.log(restaurants);
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

findRestaurants();
