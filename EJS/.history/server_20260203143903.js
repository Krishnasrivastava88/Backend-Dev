import express from "express"
const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/user",(req,res)=>{
    let user = {
})

app.listen(3000,()=>{
   console.log("Server is running on port 3000"); 

})