'use strict';
const http = require ('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    console.log(request.method, request.url);
    if (request.url == '/script.js'){
        const scrJS = fs.readFileSync('script.js', 'utf8');
        response.end(scrJS);
    }
    if (request.url == '/style.css'){
        const css = fs.readFileSync('style.css', 'utf8');
        response.end(css);
    }else {
        const html = fs.readFileSync('index.html', 'utf8');
        response.end(html);
    }
});

server.listen(process.env.PORT || 8080);
console.clear();
console.log('Server is started!\n');