const { 
  DynamoDBClient,
  ListTablesCommand
} = require('@aws-sdk/client-dynamodb');

const { AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY } = process.env;

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: AMAZON_ACCESS_KEY_ID,
    secretAccessKey: AMAZON_SECRET_ACCESS_KEY
  }
});

const list_tables = async () => {
  const command = new ListTablesCommand({});
  const response = await client.send(command);
  return response;
};

module.exports = {
  list_tables
};
