// Banking Security
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

app.use('/transfer', rateLimit({ windowMs: 60*1000, max: 3 }));

app.post('/transfer', (req,res)=>{
    const { amount } = req.body;
    if(amount > 100000) return res.send("Limit exceeded");
    res.send("Transfer ok");
});
