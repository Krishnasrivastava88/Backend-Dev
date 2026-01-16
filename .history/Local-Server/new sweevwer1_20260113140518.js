const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  
  const parsedUrl = url.parse(req.url, true);   // true → parse query params
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  // ROUTE: "/"
  if (path === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the Node.js HTTP Server");
  
  // ROUTE: "/about"
  } else if (path === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head><title>About Page</title></head>
        <body>
          <h1>About This Server</h1>
          <p>This is a simple Node.js HTTP server created without Express.</p>
        </body>
      </html>
    `);

  // ROUTE: "/user?name=xyz&age=20"
  } else if (path === "/user" && req.method === "GET") {
    const { name, age } = query;

    const userData = {
      success: true,
      name: name || "Unknown",
      age: age || "Not provided",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userData));

  // ROUTE: Not Found
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});

// Start Server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
