const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World")
})
app.get("/user", (req, res)=>{
    res.send("User Page")
})

app.listen(3000, () => {
    console.log("server is running")
})