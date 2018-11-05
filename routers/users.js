const express = require('express');
const path = require('path');
const usersController = require(path.resolve('controllers/users.js'));
const router = express.Router();

router
    .route('/')
    .get(usersController.get);

module.exports = (app) => {
    app.use('/users', router);
};
