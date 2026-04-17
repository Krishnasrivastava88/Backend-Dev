// Problem 1: Secure Registration
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

const users = [];

function validatePassword(password) {
    if (password.length < 8) return "Min 8 chars required";
    if (!/[A-Z]/.test(password)) return "Need uppercase";
    if (!/[a-z]/.test(password)) return "Need lowercase";
    if (!/[0-9]/.test(password)) return "Need number";
    if (!/[!@#$%^&*]/.test(password)) return "Need special char";
    return null;
}

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (users.find(u => u.email === email))
        return res.status(409).send("User exists");

    const error = validatePassword(password);
    if (error) return res.status(400).send(error);

    const hash = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hash });

    res.status(201).send("Registered");
});

app.listen(3000);
