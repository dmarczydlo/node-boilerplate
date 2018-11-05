const _ = require("lodash");
const defaults = require("./default.js");
const config = require("./env/" + (process.env.NODE_ENV || "development") + ".js");

module.exports = _.merge({}, defaults, config);
