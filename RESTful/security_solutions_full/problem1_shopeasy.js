// ShopEasy Security Fix
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();
app.use(express.json());

app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

app.use('/login', rateLimit({ windowMs: 15*60*1000, max: 5 }));

// price validation
app.post('/product', (req,res)=>{
    const { price } = req.body;
    if(price < 0) return res.status(400).send("Invalid price");
    res.send("Valid");
});
