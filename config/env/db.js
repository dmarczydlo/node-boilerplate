const dotenv = require('dotenv');
dotenv.config({'path': '.env'});
const env = process.env.NODE_ENV || 'development';
dotenv.config({'path': '.' + env + '.env'});

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  dialectOptions: {
    decimalNumbers: true
  },
  operatorsAliases: Op,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  logging: process.env.NODE_ENV === 'development'
};
