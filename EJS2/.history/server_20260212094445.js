import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const files =fs.readirSync("./public")
    const page =parseInt(req.query.page)
    const limit=10;
    const totalPages=Math.ceil(files.length/limit);
    const startIndex
    const startIndex
    const startIndex
    res.send("this is home page");
});

app.listen(port, () => {
    console.log("server is running");
});
