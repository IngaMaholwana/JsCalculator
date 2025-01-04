// Basic Math Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error"; // Handle division by zero
    return a / b;
}

// Operate Function
function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    }
}

// Variables to Store Calculator State
let firstOperand = null;
let secondOperand = null;
let operator = null;
let currentInput = "";
let shouldResetDisplay = false;
