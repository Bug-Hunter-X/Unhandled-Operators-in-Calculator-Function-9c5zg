# Unhandled Operators in JavaScript Calculator

This repository demonstrates a common error in JavaScript: insufficient handling of invalid input in a function.  The `operate` function performs basic arithmetic operations, but it lacks robust error handling for unsupported operators.

## The Bug
The `operate` function uses a `switch` statement to handle four arithmetic operators. However, if the user provides an operator other than '+', '-', '*', or '/', the function throws a generic 'Invalid operator' error. This error message is not very informative, making debugging difficult.

## The Solution
The solution improves error handling by:

1. Providing more specific error messages based on the invalid operator.
2. Implementing input validation to check for invalid operators before processing.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the code with the bug.
3. Open `bugSolution.js` to see the improved code with better error handling.