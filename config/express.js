const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const { returnError } = require(path.resolve('utils/status'));
const bodyParser = require('body-parser');

module.exports = function () {
  const app = express();

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '10mb', extended: true }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

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
