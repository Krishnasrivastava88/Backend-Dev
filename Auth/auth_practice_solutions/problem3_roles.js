// Problem 3: Role Authorization
const express = require('express');
const app = express();

const usersDB = [
    { id:1, role:"user" },
    { id:2, role:"moderator" },
    { id:3, role:"admin" }
];

const isAuth = (req,res,next)=>{
    req.user = usersDB[0];
    next();
};

const requireRole = (role) => (req,res,next)=>{
    if(req.user.role !== role)
        return res.status(403).send("No access");
    next();
};

app.get('/admin', isAuth, requireRole("admin"), (req,res)=>{
    res.send("Admin panel");
});

app.listen(3000);
