let printMessage= (msg: string): void => console.log(`Message: ${msg}`);

let message = ("Hello from TypeScript");
printMessage(message);

let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${val} lives in ${key}`));