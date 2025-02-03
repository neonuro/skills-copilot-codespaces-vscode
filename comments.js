// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a list of comments
const comments = [
    {id:1, author: "John", body: "Hello World"},
    {id:2, author: "Jane", body: "Hi there"},
    {id:3, author: "Doe", body: "How are you?"}
];

// Create a route for comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the web server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});