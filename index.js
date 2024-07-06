"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
function calculation(operation, firsNumber, secondNumber) {
    let result = 0;
    if (operation === "+") {
        result = (0, function_1.addition)(firsNumber, secondNumber);
    }
    else if (operation === "*") {
        result = (0, function_1.multiply)(firsNumber, secondNumber);
    }
    else if (operation === "-") {
        result = (0, function_1.subtraction)(firsNumber, secondNumber);
    }
    else {
        result = (0, function_1.divide)(firsNumber, secondNumber);
    }
    return result;
}
console.log(calculation("-", 2, 3));
