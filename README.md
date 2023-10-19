In this repo you will find several templates to get you started with various integrations with Less in different programming languages.

All folders in the root of this directory are functioning Less projects. To get started quickly, clone the repo, `cd` into the desired integration folder, and deploy. It's that easy!

Here's an example:
```shell
git clone git@github.com:chuva-io/less-templates.git
cd postgres
less-cli deploy YOUR_PROJECT_NAME
```

You can download the Less CLI here:  
[![npm version](https://badge.fury.io/js/@chuva.io%2Fless-cli.svg)](https://badge.fury.io/js/@chuva.io%2Fless-cli)

In all of the examples you can expect the following:
1. The integrations will be created as shared modules (in the `/less/shared` folder), allowing them to be easily copied and used in your own projects.
2. There will be a `GET /hello/{LANGUAGE}` (e.g. GET /hello/py) route for each programming language (in the `/less/apis/demo/hello` folder).

---

# Integrations

## Mongodb
<img src='./mongodb/images/mongodb.svg' width='128'/>  

- [README](./mongodb/)
- [Javascript client code](./mongodb/less/shared/mongodb_client_js/index.js)

## Postgres
<img src='./postgres/images/postgres.svg' width='128'/>  

- [README](./postgres/)
- [Javascript client code](./postgres/less/shared/postgres_client_js/index.js)
