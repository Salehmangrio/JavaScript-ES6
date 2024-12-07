 function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function calculate(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = sum(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            throw new Error("Invalid operator");
    }
    return result;
}

export default {
    sum,
    subtract,
    divide,
    multiply,
    calculate
};

