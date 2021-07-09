"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc");
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = ("Hello from TypeScript");
printMessage(message);
let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${val} lives in ${key}`));
debugger;
let total = calc_1.sum(100, 200, 300);
console.log(`Total is ${total}`);
//# sourceMappingURL=index.js.map