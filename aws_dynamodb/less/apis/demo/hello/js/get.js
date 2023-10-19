const { list_tables } = require('dynamodb_client_js');

module.exports = {
  process: async (request, response) => {
    // Fetch all tables.
    const result = await list_tables();

    // Return HTTP response.
    response.statusCode = 200;
    response.body = JSON.stringify(result);
    return response;
  }
};
