const http = require('http');

const server = http.createServer((req,res)=>{
    let user = {
        username: "john_doe",
        email:"qwerty@gmail.com"
    });
    res.end(JSON.stringify(user))

  console.log("url "+ req.url)
  console.log("Http method " + req.method)

  res.writeHead(200,{
    "content-type":"text/html",
    "userinfo":"this is my user"
  })

  res.end("hello")

})

server.listen(3000,()=>{
  console.log("server is running ")
})


