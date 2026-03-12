import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const files =fs.readirSync("./public")
    const page =parseInt(req.query.page)
    const limit=10;
    const totalPages
    res.send("this is home page");
});

app.listen(port, () => {
    console.log("server is running");
});
