// const http = require('http');

// const server = http.createServer((req,res)=>{
//     let user = {
//         username: "john_doe",
//         email:"qwerty@gmail.com"
//     });
//     res.end(JSON.stringify(user))

//   console.log("url "+ req.url)
//   console.log("Http method " + req.method)

//   res.writeHead(200,{
//     "content-type":"text/html",
//     "userinfo":"this is my user"
//   })

//   res.end("hello")

// })

// server.listen(3000,()=>{
//   console.log("server is running ")
// })

// const http = require('http');

// const server = http.createServer((req, res) => {

//   const user = {
//     username: "deepak",
//     email: "qwerty@gmail.com"
//   };

//   res.writeHead(200, {
//     "Content-Type": "application/json"
//   });

//   res.end(JSON.stringify({
//     success: true,
//     user: user
//   }));

//});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const http = require('http');

const server = http.createServer((req, res) => {

  const user = {
    username: "deepak",
    email: "qwerty@gmail.com"
  };

  // IF–ELSE inside the server
  if (req.url === "/user") {

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
      success: true,
      user
    }));

  } else {

    res.writeHead(404, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
      success: false,
      message: "Route not found"
    }));

  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
