const path = require('path');

const User = require(path.resolve('models')).User;

module.exports.getUsers = async (param = null) => {
    return new Promise(async (resolve, reject) => {

        try {
            const users = await User.findAll();
            resolve(users);

        } catch (error) {
            console.log(error);
            reject(`not data for users`);
        }
    });
};