const http = require("http");
const querystring = require("querystring");
const port = 3000;
const server = http.createServer((req, res) => {
    if(req.method === "POST" && req.url === "/login"){
        let data="";
        req.on("data",(chunk)=>{
            data+=chunk.tosttring();
        });
        req.on("end"()=>{
            console.log "raw data in form unlencoded "+data);
            let parsedData=querystring.parse(data);
            console.log("parsed raw to js object ",parsedData);
            let jsonString=JSON.stringify(parsedData);
            console.log("js object to json string");
            let final
           
        }
    }
}