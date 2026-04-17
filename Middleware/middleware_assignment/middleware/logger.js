const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/requests.log');

const logger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const time = Date.now() - start;

        const log = `${new Date().toISOString()} | ${req.method} | ${req.originalUrl} | ${res.statusCode} | ${time}ms\n`;

        fs.appendFile(logFile, log, err => {
            if (err) console.error(err);
        });
    });

    next();
};

module.exports = logger;