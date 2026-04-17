// MediBook Security
const express = require('express');

const app = express();
app.use(express.json());

// role check
const role = (r)=>(req,res,next)=>{
    if(req.user?.role !== r) return res.send("Denied");
    next();
};

app.get('/records', role('doctor'), (req,res)=>{
    res.send("Secure records");
});
