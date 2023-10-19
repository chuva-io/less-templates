const { MongoClient } = require('mongodb');

const { MONGODB_URI, MONGODB_DATABASE_NAME } = process.env;
let client;

async function connect() {
  if (!client) {
    client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
  }
}

const collection_name = 'my_collection';

async function insert_item(item) {
  await connect();
  const db = client.db(MONGODB_DATABASE_NAME);
  const collection = db.collection(collection_name);
  await collection.insertOne(item);
}

async function get_all_items() {
  await connect();
  const db = client.db(MONGODB_DATABASE_NAME);
  const collection = db.collection(collection_name);
  return await collection.find().toArray();
}

module.exports = {
  insert_item,
  get_all_items
};
