var x = 10;
var y = 25;

console.log(x * y);

var msgs = require('./msgs.js');    // this is only loaded once. so any subsequent request return a cached version
msg = new msgs();
console.log(msg.first);