const http = require("http");
const querystring = require("querystring");
const port = 3000;
const server = http.createServer((req, res) => {
    if(req.method === "POST" && req.url === "/login"){
        let data="";
        req.on("data,(chunk=")
    }
}