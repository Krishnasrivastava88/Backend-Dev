const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    res.render('gallery', { images });
});

app.listen(3000, () => console.log("Server running"));
