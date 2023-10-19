# AWS DynamoDB

<img src='./images/aws_dynamodb.svg' width='128'/>

AWS DynamoDB integration allows you to query, insert, and modify data within your DynamoDB tables.

Official Website: [https://aws.amazon.com/dynamodb/](https://aws.amazon.com/dynamodb/)

## TLDR; Clone and deploy.
```shell
git clone git@github.com:chuva-io/less-templates.git
cd dynamodb
less-cli deploy YOUR_PROJECT_NAME
```

You can download the Less CLI here:  
[![npm version](https://badge.fury.io/js/@chuva.io%2Fless-cli.svg)](https://badge.fury.io/js/@chuva.io%2Fless-cli)

---

Export your `AMAZON_ACCESS_KEY_ID` and `AMAZON_SECRET_ACCESS_KEY` environment variables before getting started.

*Note: The* `AWS_` *prefix is reserved for environment variables.*

```shell
export AMAZON_ACCESS_KEY_ID='H46SRG386IHW654243SH'
export AMAZON_SECRET_ACCESS_KEY='hgT5/uhFeA4RyjI8/76F+GVGdfe4LF/k9j+29L13'
```

## Javascript
Documentation: [https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html)
NPM: [https://www.npmjs.com/package/@aws-sdk/client-dynamodb](https://www.npmjs.com/package/@aws-sdk/client-dynamodb)
Source Code: [https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb](https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-dynamodb)

### Getting started
1. Create a Javascript Dynamodb client in `/less/shared/dynamodb_client_js/index.js`.
    ```javascript
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

    const list_tables = () => {
      const command = new ListTablesCommand({});
      const response = await client.send(command);
      return response;
    };
    ```

2. Create a `GET /hello/js` route in `/less/apis/demo/hello/js/get.js` to test.
    ```javascript
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
    ```

3. Deploy!
    ```shell
    npx @chuva.io/less-cli deploy YOUR_PROJECT_NAME
    ```
