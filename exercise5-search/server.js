const express = require("express");
const app = express();

const books = [
 {id:1,title:"Node.js Guide"},
 {id:2,title:"JavaScript Basics"},
 {id:3,title:"Express Tutorial"},
 {id:4,title:"Learning Node"}
];

app.get("/api/books/search",(req,res)=>{

 const title = req.query.title;

 if(!title){
  return res.json(books);
 }

 const result = books.filter(book =>
  book.title.toLowerCase().includes(title.toLowerCase())
 );

 res.json(result);
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});