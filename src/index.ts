import { sum } from "./calc";

let printMessage= (msg: string): void => console.log(`Message: ${msg}`);

let message = ("Hello from TypeScript");
printMessage(message);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${val} lives in ${key}`));


debugger;
let total = sum(100, 200, 300);
console.log(`Total is ${total}`);