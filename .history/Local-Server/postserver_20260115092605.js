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
            let final = JSON.parse(jsonString);
            console.log("json string to js object ",final);
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end({msg:"Data received successfully",jsonString});
           
        }
    }
}