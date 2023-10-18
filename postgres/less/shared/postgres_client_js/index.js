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
