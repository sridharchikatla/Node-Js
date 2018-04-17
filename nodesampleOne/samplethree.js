var host = '127.0.0.1';
var http = require('http');
var port = '8000';

var fs = require('fs');
var path = require('path');

var mimes = {
    ".html": "text/html",
    ".css": "text/css",
    "js": "text/javascript",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".png": "image/png"
};


var server = http.createServer(function (req, res) {

    var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);

    // extracting mimes
    var ctype = mimes[path.extname(filepath)];

    fs.exists(filepath, function (file_exists) {
        if (file_exists) {
            fs.readFile(filepath, function (error, content) {
                if (error) {
                    res.writeHead(500);
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': ctype });
                    res.end(content, 'utf-8');
                    console.log("Please open the url http://localhost:8000");
                }
            })

        } else {
            res.writeHead(404);
            res.end("Page not found error");
        }

    })
}).listen(port, host);