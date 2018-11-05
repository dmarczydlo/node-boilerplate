'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'users',
        timestamps: false,
    });
    User.associate = function (models) {
    };
    return User;
};
