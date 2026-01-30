const express = require("express");
const app = express();

app.get("/userdetail", (req, res) => {
  const user = {
    name: "krishna",
    email: "qwert@123"
  };

  res.json(user);   // ✅ send object as JSON
});

app.listen(3000, () => {
  console.log("server is running");
});