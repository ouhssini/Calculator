# JavaScript Calculator

This is a simple calculator web application built using HTML, CSS, and JavaScript. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Responsive Design**: The calculator is designed to work well on various screen sizes, including desktop and mobile devices.
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division are supported.
- **Error Handling**: Division by zero is handled gracefully, displaying an error message to the user.
- **Dynamic Display**: The calculator dynamically adjusts the display to ensure that only the last 14 characters are visible.

## Usage

To use the calculator, simply click on the buttons to input numbers and operators. The current expression is displayed on the screen, and the result is updated in real-time.

### Buttons

- **AC**: Clears the current input and resets the calculator.
- **DEL**: Deletes the last character from the current input.
- **%**: Calculates the modulo operation of the current number.
- **+**: Addition operator.
- **-**: Subtraction operator.
- **\***: Multiplication operator.
- **/**: Division operator.
- **=**: Calculates the result of the expression.

## JavaScript Functions

### `updateScreen()`

This function updates the content displayed on the calculator screen.

- **Purpose**: Ensures that the content displayed on the screen is always up-to-date with the current input.
- **Functionality**:
  - Checks the length of the current string.
  - If the length is greater than or equal to 19 characters, it displays only the last 19 characters of the current string.
  - Otherwise, it displays the entire current string.
- **Usage**: Called after every button click event to update the content displayed on the screen.

### `calculate()`

This function performs arithmetic calculations based on the stored prev, current, and operator values.

- **Purpose**: Calculates the result of arithmetic operations when the "=" button is clicked.
- **Functionality**:
  - Evaluates the current arithmetic operation based on the operator value.
  - Handles different arithmetic operations such as addition, subtraction, multiplication, division, and modulo.
  - Updates the current variable with the calculated result and then updates the screen.
- **Usage**: Called when the "=" button is clicked to perform the calculation.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ouhssini/Calculator.git
