//fs module
//import fs module
const fs = require("fs");

// const read=(err,data)=>{
//   if(err) throw err
//   console.log(data)
// }

// fs.readFile('./log.txt','utf-8',read)
console.log("first");
// fs.readFile('./FS/log.txt','utf-8',(err,data)=>{
//   if(err) throw err
//   console.log(data)
// })
console.log("end");

const data = "This is a new data";

// fs.writeFile('./FS/log.txt','utf-8',data,(err)=>{
//   if(err) throw err
//   console.log('file write success')
// })

// fs.writeFile("./FS/output.txt", data, (err) => {
//   if (err) throw err;
//   console.log("file write success");
// });

fs.appendFile('./FS/output.txt',"\nThis is new text",(err)=>{
  if(err) throw err;
  console.log("Text is added")
})

fs.unlinkSync('./FS/output.txt')