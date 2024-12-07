
console.log("\nExport Named now");

import {sum,divide,subtract,multiply,calculate} from'./exporting.mjs';

console.log("SUM: ",sum(2, 3)); // 5
console.log("Divide: ",divide(10, 2)); // 5
console.log("Subtract: ",subtract(5, 3)); // 2
console.log("Multiply: ",multiply(2, 3)); // 6
console.log("Calculation: ",calculate(2, 3, '+')); // 5


console.log("\nExport Deafault now");

import defaultCalculator from './exportingDefault.mjs';

console.log("SUM: ", defaultCalculator.sum(2, 3)); // 5
console.log("Divide: ", defaultCalculator.divide(10, 2)); // 5
console.log("Subtract: ", defaultCalculator.subtract(5, 3)); // 2
console.log("Multiply: ", defaultCalculator.multiply(2, 3)); // 6
console.log("Calculation: ", defaultCalculator.calculate(2, 3, '+')); // 5


