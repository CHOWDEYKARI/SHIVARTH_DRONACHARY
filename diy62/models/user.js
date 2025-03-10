// models/user.js
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

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

async function registerUser(username, password) {
    const db = await connectDB();
    const collection = db.collection('users');

    // Check if user already exists
    const existingUser = await findUser(username);
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await collection.insertOne({ username, password: hashedPassword });
    return result.insertedId;
}

async function findUser(username) {
    const db = await connectDB();
    const collection = db.collection('users');
    return await collection.findOne({ username });
}

module.exports = { registerUser, findUser };
