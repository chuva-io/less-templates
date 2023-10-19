# MongoDB

<img src='./images/mongodb.svg' width='128'/>

MongoDB is a flexible document database system that stores data in JSON-like documents.

Official Website: [https://www.mongodb.com](https://www.mongodb.com)

## TLDR; Clone and deploy.
```shell
git clone git@github.com:chuva-io/less-templates.git
cd mongodb
less-cli deploy YOUR_PROJECT_NAME
```

You can download the Less CLI here:  
[![npm version](https://badge.fury.io/js/@chuva.io%2Fless-cli.svg)](https://badge.fury.io/js/@chuva.io%2Fless-cli)

---

Export your `MONGODB_URI` and `MONGODB_DATABASE_NAME` environment variables before getting started.
```shell
export MONGODB_URI='mongodb+srv://username:password@mongodb.net/?retryWrites=true&w=majority'
export MONGODB_DATABASE_NAME='my_database'
```

## Javascript
Documentation: [http://mongodb.github.io/node-mongodb-native/](http://mongodb.github.io/node-mongodb-native/)  
NPM: [https://www.npmjs.com/package/mongodb](https://www.npmjs.com/package/mongodb)  
Source Code: [https://github.com/mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)  

### Getting started
1. Create a Javascript Mongodb client in `/less/shared/mongodb_client_js/index.js`.
    ```javascript
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
    ```

2. Create a `GET /hello/js` route in `/less/apis/demo/hello/js/get.js` to test.
    ```javascript
    const { insert_item, get_all_items } = require('mongodb_js');

    module.exports = {
      process: async (request, response) => {
        // Create an item.
        await insert_item({ foo: 'bar '});

        // Fetch all items.
        const result = await get_all_items();

        // Return HTTP response.
        response.statusCode = 200;
        response.body = JSON.stringify(result);
        return response;
      }
    };
    ```

3. Deploy!
    ```shell
    npx @chuva.io/less-cli deploy YOUR_PROJECT_NAME
    ```
