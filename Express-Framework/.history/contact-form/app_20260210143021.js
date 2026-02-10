const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/contact', (req, res) => {
    const { name, message } = req.body;
    res.render('success', { name, message });
});

app.listen(3000, () => console.log("Server running"));
