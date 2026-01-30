import express from "express";

const app = express();
app.use(express.json());

let data = [
  { id: 1, username: "qwert", password: "qwer123" },
  { id: 2, username: "ramesh", password: "1234" }
];

// Home route
app.get("/", (req, res) => {
  res.status(200).json({ message: "home route" });
});

// Get all users
app.get("/user", (req, res) => {
  res.status(200).json({
    message: "all user",
    data
  });
});

// Create new user
app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "username and password required"
    });
  }

  const newUser = {
    id: data.length + 1,
    username,
    password
  };

  data.push(newUser);

  res.status(201).json({
    message: "user created",
    user: newUser
  });
});

// 🔁 UPDATE USER (PUT)
app.put("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { username, password } = req.body;

  const userIndex = data.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "user not found"
    });
  }

  // update only provided fields
  data[userIndex] = {
    ...data[userIndex],
    ...(username && { username }),
    ...(password && { password })
  };

  res.status(200).json({
    message: "user updated",
    user: data[userIndex]
  });
});

app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIdx = data.findIndex(ele => ele.id === id);

  if (userIdx === -1) {
    return res.status(404).json({
      message: "user not found"
    });
  }

  const deletedUser = data[userIdx];
  data.splice(userIdx, 1);

  res.status(200).json({
    message: "user deleted",
    user: deletedUser
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});