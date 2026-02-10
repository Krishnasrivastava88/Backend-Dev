const express = require('express');
const app = express();

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

app.get('/users', (req, res) => {
    const name = req.query.name;

    if (name) {
        const filtered = users.filter(u =>
            u.name.toLowerCase().includes(name.toLowerCase())
        );
        res.json(filtered);
    } else {
        res.json(users);
    }
});

app.listen(3000, () => console.log("Server running"));
