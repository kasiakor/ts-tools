var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = ("Hello from TypeScript");
printMessage(message);
var data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach(function (val, key) { return console.log(val + " lives in " + key); });
