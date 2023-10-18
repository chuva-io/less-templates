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