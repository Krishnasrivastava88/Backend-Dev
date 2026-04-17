// EduLearn Security
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

app.use('/login', rateLimit({ windowMs: 15*60*1000, max: 5 }));

// file validation
app.post('/upload', (req,res)=>{
    const file = req.body.file;
    if(!file.endsWith('.pdf')) return res.send("Invalid file");
    res.send("Uploaded");
});
