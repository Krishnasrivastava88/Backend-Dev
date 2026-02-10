const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

let posts = [
    { id: 1, title: "First Post", content: "Hello World" }
];

// List posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Form to create post
app.get('/new', (req, res) => {
    res.render('new');
});

// Create post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const id = posts.length + 1;
    posts.push({ id, title, content });
    res.redirect('/');
});

// View single post
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('post', { post });
});

app.listen(3000, () => console.log("Server running"));
