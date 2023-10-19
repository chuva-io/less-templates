const { insert_item, get_all_items } = require('mongodb_client_js');

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
}
