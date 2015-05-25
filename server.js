var http = require('http');
http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><h1>' + req.url + '</h1></body></html>')
    res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');