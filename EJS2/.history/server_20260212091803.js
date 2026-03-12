import express from "exprrss";

const app =express();
int port

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    app.send("this is home page")
})
