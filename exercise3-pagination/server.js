const express = require("express");
const app = express();

let books = [];

for(let i=1;i<=50;i++){
 books.push({id:i,title:"Book "+i});
}

app.get("/api/books",(req,res)=>{

 const page = parseInt(req.query.page) || 1;
 const limit = parseInt(req.query.limit) || 10;

 const startIndex = (page-1)*limit;
 const endIndex = startIndex + limit;

 const result = books.slice(startIndex,endIndex);

 res.json({
  page:page,
  limit:limit,
  total:books.length,
  data:result
 });

});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});