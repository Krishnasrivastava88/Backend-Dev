const express = require("express");
const app = express();

app.use(express.json());

let authors = [];
let id = 1;

app.post("/api/authors",(req,res)=>{

 const newAuthor = {
  id:id++,
  name:req.body.name
 };

 authors.push(newAuthor);

 res.status(201).json(newAuthor);
});

app.get("/api/authors",(req,res)=>{
 res.json(authors);
});

app.get("/api/authors/:id",(req,res)=>{

 const author = authors.find(a => a.id == req.params.id);

 if(!author){
  return res.status(404).json({error:"Author not found"});
 }

 res.json(author);
});

app.put("/api/authors/:id",(req,res)=>{

 const author = authors.find(a => a.id == req.params.id);

 if(!author){
  return res.status(404).json({error:"Author not found"});
 }

 author.name = req.body.name;

 res.json(author);
});

app.delete("/api/authors/:id",(req,res)=>{

 authors = authors.filter(a => a.id != req.params.id);

 res.json({message:"Author deleted"});
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});