const express = require("express");
const app = express();

app.get("/userdetails", (req, res) => {
  const user = {
    name: "krishna",
    email: "qwerty@123"
  };

  res.json(user);   
});

app.listen(3000, () => {
  console.log("server is running");
});