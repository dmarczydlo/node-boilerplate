const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const { returnError } = require(path.resolve('utils/status'));

module.exports = function () {
  const app = express();

  app.use(cors());
  app.use(helmet());
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
