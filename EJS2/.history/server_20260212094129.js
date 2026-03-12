import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const files =fs
    res.send("this is home page");
});

app.listen(port, () => {
    console.log("server is running");
});
