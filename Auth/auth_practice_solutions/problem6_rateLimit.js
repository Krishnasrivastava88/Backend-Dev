// Problem 6: Rate Limit
const express = require('express');
const app = express();

const attempts = new Map();

function check(email){
    const data = attempts.get(email);
    if(data && data.lockUntil > Date.now())
        return "Locked";
    return null;
}

function fail(email){
    let data = attempts.get(email) || { count:0 };
    data.count++;
    if(data.count >= 5){
        data.lockUntil = Date.now() + 30*60*1000;
        data.count = 0;
    }
    attempts.set(email, data);
}

app.post('/login', (req,res)=>{
    const { email } = req.body;
    if(check(email)) return res.send("Account locked");
    fail(email);
    res.send("Login failed");
});

app.listen(3000);
