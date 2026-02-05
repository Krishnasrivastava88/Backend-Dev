// // path module




// // abosulte path
// const abosultePath=Path2D.resolve("./FS/log.txt")

// console.log(abosultePath)
// console.log(__dirname)
// console.log(Path2D.basename('./FS/log.txt'))
// console.log()

// const joinPath=Path2D.join(__dirname,"FS","log.txt");
// console.log(joinPath)

// const pathParse=path.parse(joinPath)
// console.log(pathParse)

const http=require("http")
const server=http.createServer((req,res)=>{
    console.log(req.url)
    console.log(req.method)
    res.writeHead(200,{"content-type": "text/html"})
    res.write("<h1> welcome </h1>")
    res.end()
})

server.listen(3000,()=>{
    console.log("server is running on port",3000)
})