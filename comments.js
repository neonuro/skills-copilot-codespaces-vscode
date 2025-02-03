// create simple listener service for comments
const express = require('express');
const app = express();
const port = 3000;

// create a simple route
app.post('/comments', (req, res) => {
    console.log('Received a request!');
    res.send('Hello World!');
});

// start the server
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
