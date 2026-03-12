const express = require("express");
const app = express();

const books = [
 {id:1,title:"1984",author:"George Orwell",year:1949},
 {id:2,title:"The Great Gatsby",author:"F Scott Fitzgerald",year:1925},
 {id:3,title:"Animal Farm",author:"George Orwell",year:1945},
 {id:4,title:"Harry Potter",author:"J K Rowling",year:1997}
];

app.get("/api/books",(req,res)=>{

 const {author,year} = req.query;

 let result = books;

 if(author){
  result = result.filter(book => book.author === author);
 }

 if(year){
  result = result.filter(book => book.year == year);
 }

 res.json(result);
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});