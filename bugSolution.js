function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(a, b, operator) {
  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new Error(`Invalid operator: '${operator}'. Only '+', '-', '*', and '/' are supported.`);
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

console.log(operate(10, 2, '+')); // Output: 12
console.log(operate(10, 2, '-')); // Output: 8
console.log(operate(10, 2, '*')); // Output: 20
console.log(operate(10, 2, '/')); // Output: 5
console.log(operate(10, 0, '/')); // throws an error
//console.log(operate(10, 2, '%')); // throws a more descriptive error now