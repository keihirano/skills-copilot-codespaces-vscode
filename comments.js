// Create web server 
// Create a simple web server that returns the comments array when the path /comments is requested. Use the http module to create the server.

const http = require('http');
const comments = require('./comments');

http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

// You can test the server by running the following command in the terminal and then opening http://localhost:3000/comments in your browser:

// $ node comments.js
// You should see the comments array displayed in the browser window. If you open any other path, you should see a 404 Not Found message.
