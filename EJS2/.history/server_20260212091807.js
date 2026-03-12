import express from "exprrss";

const app =express(); port

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    app.send("this is home page")
})
