const express = require('express');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./config/session');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(sessionConfig);

app.use('/form', require('./routes/formRoutes'));
app.use('/lang', require('./routes/languageRoutes'));
app.use('/admin', require('./routes/adminRoutes'));
app.use('/cart', require('./routes/cartRoutes'));

module.exports = app;