const path = require('path');
const { returnSuccess, returnError } = require(path.resolve('utils/status'));
const { getUsers } = require(path.resolve('managers/users'));


module.exports.get = async (req, res) => {
    getUsers().then(users => returnSuccess(res, users)
    ).catch(error => returnError(res, error));
};
