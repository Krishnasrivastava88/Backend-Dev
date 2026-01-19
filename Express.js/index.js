const express = require("express");
const app = express();


let name = "Krishna";
let age = 21;
let city = "India";


app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/user", (req, res) => {
    res.send("User Page");
});

app.get("/userdetails", (req, res) => {
    res.send("Name: " + name + ", Age: " + age + ", City: " + city);
});

app.get("/about", (req, res) => {
    let appName = "My First App";
    res.send(appName);
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});

app.get("/register", (req, res) => {
    res.send("Register Page");
});

app.get("/profile", (req, res) => {
    let username = "krishna123";
    res.send("Profile: " + username);
});

app.get("/dashboard", (req, res) => {
    let totalUsers = 10;
    res.send("Total Users: " + totalUsers);
});

app.get("/logout", (req, res) => {
    res.send("Logout Done");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
