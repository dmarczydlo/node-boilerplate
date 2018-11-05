const path = require('path');
const dotenv = require('dotenv');

require('dotenv').config({'path':'.env'});

const env = process.env.NODE_ENV || 'development';

require('dotenv').config({'path':'.' + env + '.env'});

module.exports = {
  root: path.normalize(__dirname + '/..')
};
