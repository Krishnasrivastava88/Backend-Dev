const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World")
})
app.get("/user", (req, res)=>{
    res.send("User route")
})
app.get("/", (req, res)=>{
    res.send("user 1 World")
})
app.get("/user", (req, res)=>{
    res.send("user route")
})

app.listen(3000, () => {
    console.log("server is running")
})