const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const dbName = "day62";
let db;

async function connectDB() {
    if (!db) {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
    }
    return db;
}

async function getAllRestaurants() {
    const db = await connectDB();
    const collection = db.collection('restaurants');
    return await collection.find({}).toArray();
}

async function getRestaurantsByCity(city) {
    const db = await connectDB();
    const collection = db.collection('restaurants');
    return await collection.find({ city }).toArray();
}

async function getRestaurantsById(id) {
    const db = await connectDB();
    const collection = db.collection('restaurants');
    return await collection.findOne({ _id: id });
}

async function filterRestaurants(filters) {
    const db = await connectDB();
    const collection = db.collection('restaurants');
    const query = {};

    if (filters.city) query.city = filters.city;
    if (filters.cuisine) query.cuisine = filters.cuisine;
    if (filters.min_price) query.min_price = { $gte: parseInt(filters.min_price) };
    if (filters.max_price) query.max_price = { $lte: parseInt(filters.max_price) };
    if (filters.meal_type) query.meal_type = filters.meal_type;

    const options = {
        sort: filters.sort ? { [filters.sort]: 1 } : {},
        skip: (filters.page - 1) * 10,
        limit: 10
    };

    return await collection.find(query, options).toArray();
}

module.exports = { getAllRestaurants, getRestaurantsByCity, getRestaurantsById, filterRestaurants };
