const express = require("express");
const app = express();

app.get("/userdetail", (req, res) => {
  const user = {
    name: "krishna",
    email: "qwert@123"
  };

  res.json(user); 
});

app.listen(5500, () => {
  console.log("server is running");
});