var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.get('/', function(req, res){
   //res.send();
    res.render('jade/index', { title: 'Express + Jade'});
});

app.get('/api/users', function(req, res){
    res.set('Content-Type','application/json');     // not nessary, but an example of setting headers
   res.send({ name: 'Phil', isValid: true, group: 'Admin'});    // express knows we really want this as json and sends us json back
});

var server = http.createServer(app);
server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');