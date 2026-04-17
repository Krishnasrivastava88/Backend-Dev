const express = require('express');
const connectDB = require('./config/db');
const healthRoute = require('./routes/health');
const logger = require('./middleware/logger');
const metrics = require('./middleware/metrics');

require('dotenv').config();

const app = express();
app.use(express.json());

// middleware
app.use(logger);
app.use(metrics);

// routes
app.use('/', healthRoute);

// connect DB
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});