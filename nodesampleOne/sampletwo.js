var http = require('http');

http.createServer(function(request, response){

    response.writeHead(200, {'Context-Type':'text/plain'});

    response.write("<h1>Hello Sridhar. this is pure nodeJs</h1>");
    response.write("<h2>You have been successfully Connected</h2>");
    response.end("<h2>You have been successfully Disconnected</h2>");

    console.log("localhost:9001");

}).listen(9001, "127.0.0.1");