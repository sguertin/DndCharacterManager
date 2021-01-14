// Import the Node.js http module
import { createServer } from 'http';
import { readFile } from 'fs';

import { extname } from 'path';

const PORT = 3000;
// req is the request object which is
// coming from the client side
// res is the response object which is going
// to client as response from the server
const getContentType = (extName) => {
    switch (extName) {
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        case '.json':
            return 'application/json';
        case '.ico':
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpg';
        case '.wav':
            return 'audio/wav';
        case '.html':
        default:
            return 'text/html';
    }
};
// Create a server object
createServer(function (request, response) {
    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }
    const contentType = getContentType(extname(filePath));
    console.log('[REQUEST] ' + request.url + ' ' + contentType);
    readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                console.error(filePath + ' not found!');
                readFile('./404.html', function (error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            } else {
                console.error(error);
                response.writeHead(500);
                response.end(
                    'Sorry, check with the site admin for error: ' +
                        error.code +
                        ' ..\n'
                );
                response.end();
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(PORT);
console.log(
    'Node.js web server at port 3000 is running... (http://localhost:' +
        PORT +
        '/)'
);
