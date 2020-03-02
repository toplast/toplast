<h1 align="center">TopLast Server</h1>

<h5 align="center">Serverless API for TopLast</h5>

## Requirements

What things you need to install the software and how to install them.

- [Node](https://nodejs.org/en/) v12.16.0 or higher
- [Yarn](https://yarnpkg.com/) v1.22.0 or higher
- A Last.fm [API key](https://www.last.fm/api/account/create)

## Installation

Install the Node.js packages.

```bash
$ yarn install
```

You need to configure environment variables on `.env` config file. Take a look on `.env.sample` to get the available variables.

## Running the application

Runs the app in the development mode on [http://localhost:8080](http://localhost:8080).

```bash
$ yarn start
```

## Testing

Tests are made with [Jest](https://jestjs.io/). You can run it with this command.

```bash
$ yarn test
```
