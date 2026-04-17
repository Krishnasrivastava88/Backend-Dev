const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

module.exports = [xss(), mongoSanitize()];