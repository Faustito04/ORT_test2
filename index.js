const http = require('http');

const host = 'localhost';
const port = 8000;

const server = http.createServer(function (req, res){
    res.writeHead(200);
    res.end("Hola Mundo Web!");
});

const server = http.createServer(requestListener);

server.listen(port, host, () =>{
    console.log("...")
});