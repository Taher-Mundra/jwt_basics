const CustomAPIError = require("./custom-error");
const notFoundError = require("./not-found");
const unauthorizedError = require("./unauthorized");

module.exports = {unauthorizedError, notFoundError, CustomAPIError}