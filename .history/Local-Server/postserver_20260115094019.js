const http = require("http");
const querystring = require("querystring");
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/login") {

        let data = "";

        req.on("data", (chunk) => {
            data += chunk.toString();
        });

        req.on("end", () => {
            console.log("Raw data in form-urlencoded: " + data);

            let parsedData = querystring.parse(data);
            console.log("Parsed form-data to JS object:", parsedData);

            let jsonString = JSON.stringify(parsedData);
            console.log("JS object to JSON string:", jsonString);

            let final = JSON.parse(jsonString);
            console.log("JSON string back to JS object:", final);

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                msg: "Data received successfully",
                data: final
            }));
        });

        return;
    }

    // Default response
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
