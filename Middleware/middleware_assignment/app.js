const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./middleware/logger'));
app.use(require('./middleware/sanitize'));

app.use('/api/users', require('./routes/userRoutes'));

module.exports = app;