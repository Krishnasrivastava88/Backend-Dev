// Problem 5: Passport Basic
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

passport.use(new LocalStrategy((username,password,done)=>{
    if(username === "admin" && password === "123")
        return done(null,{id:1});
    return done(null,false);
}));

app.post('/login',
    passport.authenticate('local'),
    (req,res)=> res.send("Login success")
);

app.listen(3000);
