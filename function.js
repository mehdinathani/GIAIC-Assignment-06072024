"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtraction = exports.addition = void 0;
function addition(...c) {
    let value = 0;
    c.forEach(num1 => {
        value += num1;
    });
    return value;
}
exports.addition = addition;
function subtraction(...c) {
    let value = 0;
    c.forEach(num1 => {
        value -= num1;
    });
    return value;
}
exports.subtraction = subtraction;
function divide(a, b) {
    return (a / b);
}
exports.divide = divide;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
