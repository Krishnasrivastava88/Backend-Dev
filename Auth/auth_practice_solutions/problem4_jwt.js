// Problem 4: JWT + Refresh
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const accessSecret = "access";
const refreshSecret = "refresh";
const refreshTokens = [];

function genAccess(user){
    return jwt.sign(user, accessSecret, { expiresIn: "15m" });
}

function genRefresh(user){
    const token = jwt.sign(user, refreshSecret, { expiresIn: "7d" });
    refreshTokens.push(token);
    return token;
}

app.post('/login', (req,res)=>{
    const user = { id:1 };
    res.json({
        access: genAccess(user),
        refresh: genRefresh(user)
    });
});

app.listen(3000);
