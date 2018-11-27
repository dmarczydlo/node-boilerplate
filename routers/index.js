const fs = require('fs');
const path = require('path');

module.exports = (express, app) => {
  fs.readdirSync(path.join(path.resolve('routers')))
    .filter(file => file.search(/index/))
    .map((file) => {
      require(path.resolve('routers/' + file.split('.')[0]))(app);
    });
};
