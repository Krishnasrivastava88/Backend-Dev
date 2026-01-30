const http = require("http");
const url = require("url");

// Create the server
// const server = http.createServer((req, res) => {

//   const parsedUrl = url.parse(req.url, true); // Parse URL + query params
//   const path = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   // ROUTE: "/"
//   if (path === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the Node.js HTTP Server");

//   // ROUTE: "/about"
//   } else if (path === "/about" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//       <html>
//         <head><title>About</title></head>
//         <body>
//           <h1>About This Server</h1>
//           <p>This is a simple HTTP server created using only the Node.js http module.</p>
//         </body>
//       </html>
//     `);

//   // ROUTE: "/user?name=xyz&age=20"
//   } else if (path === "/user" && req.method === "GET") {
//     const { name, age } = query;

//     const userData = {
//       success: true,
//       name: name || "Unknown",
//       age: age || "Not provided"
//     };

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(userData));

//   // INVALID ROUTE
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page Not Found");
//   }
// });0

// Start server on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
const server = http.createServer((req, res) => {

 const baseURL = "http://localhost:3000";
 const parseURL=new URL(req.url,baseURL);

 console.log(parseURL);
 res.end("server is running")
})
server.listen(3000, () => {
  console.log("Server is running ");
})

