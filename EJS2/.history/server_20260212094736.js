import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    const files = fs.readdirSync("./public");

    const page = parseInt(req.query.page) || 1;
    const limit = 3;

    const totalPages = Math.ceil(files.length / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedFiles = files.slice(startIndex, endIndex);

    res.render("index", {
        files: paginatedFiles,
        currentPage: page,
        totalPages: totalPages
    });
});

app.listen(port, () => {
    console.log("server is running on port 3000");
});
