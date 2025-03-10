const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'Zomato';

// Create a new MongoClient
const client = new MongoClient(url);

async function createDatabase() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to server');

    // Get the database
    const db = client.db(dbName);

    // Create a collection and insert a document
    const collection = db.collection('restaurants');
    const result = await collection.insertOne({ name: 'Example Restaurant', cuisine: 'Indian' });
    console.log('Document inserted:', result.ops);
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the createDatabase function
createDatabase();
