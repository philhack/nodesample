var http = require('http');

var server = http.createServer(function(req, res){
    console.log(req.url);
})

server.listen(3000);