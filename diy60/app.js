const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // Default port for MongoDB is 27017
// Database Name
const dbName = 'day60';

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB server');

    // Get the database
    const db = client.db(dbName);

    // Perform operations (e.g., create a collection, insert documents, etc.)
    const collection = db.collection('mycollection');
    const insertResult = await collection.insertOne({ name: 'shivarth', age: 30 });
    console.log('Inserted document:', insertResult.ops);

  } catch (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main();
