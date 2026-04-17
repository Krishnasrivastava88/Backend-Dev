const session = require('express-session');

module.exports = session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10 * 60 * 1000 }
});