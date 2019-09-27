/* eslint-disable no-console */
const express = require('express');

const server = express();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

server.listen(3001, () => {
  console.log('server is running on port 3001');
});
