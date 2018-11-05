const path = require('path');
const { returnSuccess, returnError } = require(path.resolve('utils/status'));
const { getUsers } = require(path.resolve('managers/users'));


module.exports.get = async (req, res) => {
    const { date } = req.params;
    getUsers(date).then(users => returnSuccess(res, users)
    ).catch(error => returnError(res, error));
};
