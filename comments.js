// Create web server
// 1. Load express
// 2. Create express server
// 3. Create a route
// 4. Start the server

// 1. Load express
const express = require('express');
const fs = require('fs');

// 2. Create express server
const server = express();

// 3. Create a route
// server.get('/', (req, res) => {
//     res.send('Hello from express');
// });

// server.get('/comments', (req, res) => {
//     res.send('Comments will be displayed here');
// });

server.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.send('Error reading file');
        } else {
            res.send(data.toString());
        }
    });
});

// 4. Start the server
server.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});