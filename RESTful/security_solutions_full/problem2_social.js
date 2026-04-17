// Social Media Security
const express = require('express');
const validator = require('validator');
const xss = require('xss-clean');

const app = express();
app.use(express.json());
app.use(xss());

app.post('/register', (req,res)=>{
    const { email } = req.body;
    if(!validator.isEmail(email)) return res.send("Invalid email");
    res.send("Valid");
});
