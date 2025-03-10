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

async function getAllMealTypes() {
    const db = await connectDB();
    const collection = db.collection('mealtypes');
    return await collection.find({}).toArray();
}

module.exports = { getAllMealTypes };
