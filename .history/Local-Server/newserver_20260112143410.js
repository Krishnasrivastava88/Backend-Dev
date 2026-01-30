const http = require('http');

const server = http.createServer((req, res) => {

  const user = {
    username: "deepak",
    email: "qwerty@gmail.com"
  };

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    success: true,
    user: user
  }));

});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
