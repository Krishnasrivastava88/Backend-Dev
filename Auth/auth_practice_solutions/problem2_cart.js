// Problem 2: Session Cart
const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.json());

app.use(session({
    secret: 'cart-secret',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if (!req.session.cart) req.session.cart = [];
    next();
});

app.post('/cart/add', (req, res) => {
    req.session.cart.push(req.body);
    res.send("Added");
});

app.get('/cart', (req, res) => {
    res.json(req.session.cart);
});

app.listen(3000);
