const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const SERVER_PORT = 4000;

function init() {
  const promise = new Promise(function(resolve, reject) {
    console.log('preparing server ...');
    const app = express();

    console.log('setup cors ...');
    app.use(cors());

    console.log('setup routes ...');
    app.use(routes);

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../dist/index.html"));
    });

    resolve(app);
  });
  return promise;
}

function start(app) {
  const promise = new Promise(function(resolve, reject) {
    app.listen(SERVER_PORT, () => {
      console.log(`server is listenling on port ${SERVER_PORT}`);
      resolve(app);
    });
  });
  return promise;
}

module.exports = {
  init,
  start
};