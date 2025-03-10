const { MongoClient } = require('mongodb');
const fs = require('fs');
const url = "mongodb://127.0.0.1:27017/";
const dbName = "day61";
const client = new MongoClient(url);

async function dbConnect() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to server");

        // Get the database
        const db = client.db(dbName);

        // Read and parse the JSON files
        const restaurantsData = fs.readFileSync('restaurants.json', 'utf8');
        const locationsData = fs.readFileSync('location.json', 'utf8');
        const messagesData = fs.readFileSync('msg.json', 'utf8');
        const mealTypesData = fs.readFileSync('mealtype.json', 'utf8');

        const restaurants = JSON.parse(restaurantsData);
        const locations = JSON.parse(locationsData);
        const messages = JSON.parse(messagesData);
        const mealTypes = JSON.parse(mealTypesData);

        // Insert data into respective collections
        const restaurantCollection = db.collection('restaurants');
        const locationCollection = db.collection('location');
        const messageCollection = db.collection('messages');
        const mealTypeCollection = db.collection('mealtypes');

        const restaurantInsertResult = await restaurantCollection.insertMany(restaurants);
        const locationInsertResult = await locationCollection.insertMany(locations);
        const messageInsertResult = await messageCollection.insertMany(messages);
        const mealTypeInsertResult = await mealTypeCollection.insertMany(mealTypes);

        console.log('Restaurants inserted:', restaurantInsertResult.insertedCount);
        console.log('Locations inserted:', locationInsertResult.insertedCount);
        console.log('Messages inserted:', messageInsertResult.insertedCount);
        console.log('Meal types inserted:', mealTypeInsertResult.insertedCount);
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

dbConnect();
