# Postgres

<img src='./images/postgres.svg' width='128'/>

Postgres (aka PostgreSQL) is a versatile, high-performance, open-source relational database management system that emphasizes extensibility and SQL compliance.  

Official Website: https://www.postgresql.org  

## TLDR; Clone and deploy.
```shell
git clone git@github.com:chuva-io/less-templates.git
cd postgres
less-cli deploy YOUR_PROJECT_NAME
```

You can download the Less CLI here:  
[![npm version](https://badge.fury.io/js/@chuva.io%2Fless-cli.svg)](https://badge.fury.io/js/@chuva.io%2Fless-cli)

---

Export your `POSTGRES_URL` environment variable before getting started.
```shell
export POSTGRES_URL="postgres://username:password@host:5432/database"
```

## Javascript
Documentation: https://node-postgres.com/  
NPM: https://www.npmjs.com/package/pg  
Source Code: https://github.com/brianc/node-postgres  

### Getting started
1. Create a Javascript Postgres client in `/less/shared/postgres_client_js/index.js`.
    ```javascript
    const { Pool } = require('pg')

    const { POSTGRES_URL } = process.env;

    let client;
    const connect = async () => {
      // Create the client if it does not exist.
      if (!client) {
        const pool = new Pool({
          connectionString: POSTGRES_URL,
          ssl: { rejectUnauthorized: false }
        });

        // Store the client for reuse.
        client = await pool.connect();
      }
    };

    // Basic query example
    const query = async (statement) => {
      await connect();
      return await client.query(statement);
    };

    module.exports = {
      query
    };
    ```

2. Create a `GET /hello/js` route in `/less/apis/demo/hello/js/get.js` to test.
    ```javascript
    const { query } = require('postgres_client_js');

    module.exports = {
      process: async (request, response) => {
        response.statusCode = 200;
        const result = await query('SELECT NOW()');
        // Get the first `now` column value.
        response.body = result.rows[0].now;
        return response;
      }
    }
    ```

3. Deploy!
    ```shell
    npx @chuva.io/less-cli deploy YOUR_PROJECT_NAME
    ```