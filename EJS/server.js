import express from "express"
const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/user",(req,res)=>{
    let userdata = {
        name: "John",
        age: 30,
        email: "john@example.com"
    }
    res.render("user", {userdata});
})

app.get("/list",(req,res)=>{
    let arr = ["Alice", "Bob", "Charlie"];
    res.render("list", {arr});
})
app.listen(3000,()=>{
   console.log("Server is running on port 3000"); 

})