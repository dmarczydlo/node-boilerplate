const express = require('express');
const cors = require('cors');
const path = require('path');
const { returnError } = require(path.resolve('utils/status'));

module.exports = function () {
  let app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
  }));

  //json body verification
  app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
      return returnError(res, 'invalid request');
    } else {
      next();
    }
  });
  return app;
};
