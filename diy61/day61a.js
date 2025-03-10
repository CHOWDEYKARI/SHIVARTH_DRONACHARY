const { MongoClient } = require('mongodb');
const fs = require('fs');
const url = "mongodb://127.0.0.1:27017/";
const dbName = "diy61";
const client = new MongoClient(url);

async function dbConnect() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected successfully to server");

        // Get the database
        const db = client.db(dbName);

        // Get the collections
        const restaurantsCollection = db.collection('restaurants');
        const locationCollection = db.collection('location');
        const msgCollection = db.collection('msg');
        const mealtypeCollection = db.collection('mealtype');

        // Read and parse the JSON files
        const restaurantsData = JSON.parse(fs.readFileSync('restaurants.json', 'utf8'));
        const locationData = JSON.parse(fs.readFileSync('location.json', 'utf8'));
        const msgData = JSON.parse(fs.readFileSync('msg.json', 'utf8'));
        const mealtypeData = JSON.parse(fs.readFileSync('mealtype.json', 'utf8'));

        // Insert data into the collections
        const insertRestaurantsResult = await restaurantsCollection.insertMany(restaurantsData);
        const insertLocationResult = await locationCollection.insertMany(locationData);
        const insertMsgResult = await msgCollection.insertMany(msgData);
        const insertMealtypeResult = await mealtypeCollection.insertMany(mealtypeData);

        // Log the results
        console.log('Restaurants documents inserted:', insertRestaurantsResult.insertedCount);
        console.log('Location documents inserted:', insertLocationResult.insertedCount);
        console.log('Msg documents inserted:', insertMsgResult.insertedCount);
        console.log('Mealtype documents inserted:', insertMealtypeResult.insertedCount);
    } catch (err) {
        console.error('An error occurred:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

dbConnect();
