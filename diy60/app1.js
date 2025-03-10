const { MongoClient } = require('mongodb');

// Replace <username>, <password>, and <cluster-url> with your MongoDB Atlas credentials and cluster URL
const url = 'mongodb+srv://shivarth99:0frTe3OlmrIP9hTY@<cluster-url>/mydatabase?retryWrites=true&w=majority';
const dbName = 'day60Atlas';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    // Connect to the MongoDB Atlas cluster
    await client.connect();
    console.log('Connected successfully to MongoDB Atlas');

    const db = client.db(dbName);

    // Perform operations
    const collection = db.collection('mycollection');
    const insertResult = await collection.insertOne({ name: 'Jane Doe', age: 25 });
    console.log('Inserted document:', insertResult.ops);

  } catch (err) {
    console.error('An error occurred while connecting to MongoDB Atlas:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main();
