var x = 10;
var y = 25;

console.log(x * y);

var msgs = require('./msgs.js');    // this is only loaded once. so any subsequent request return a cached version
console.log(msgs.first);
console.log(msgs.second);
console.log(msgs.third.name);