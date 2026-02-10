const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send("Home Page");
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, () => console.log("Server running"));
