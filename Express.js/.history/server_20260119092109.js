const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World")
})
app.get("/user", (req, res)=>{
    res.send("User 1 route")
})
app.get("/userdetails", (req, res)=>{
    res.send("user 2 World")
})
app.get("/user", (req, res)=>{
    res.send("user 3 route")
})

app.listen(3000, () => {
    console.log("server is running")
})