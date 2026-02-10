const express = require('express');
const app = express();

// Response time middleware
app.use((req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${duration}ms`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000, () => console.log("Server running"));
