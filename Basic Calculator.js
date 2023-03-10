function calculate(num1, operation, num2) {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num2 === 0 ? null : num1 / num2;
        case '*': return num1 * num2;
        default: return null
    }
}

console.log(calculate(-3, "/", 0));
console.log(calculate(-3, "/", 1));