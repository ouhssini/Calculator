# JavaScript Calculator

This is a simple calculator web application built using HTML, CSS, and JavaScript. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Responsive Design**: The calculator is designed to work well on various screen sizes, including desktop and mobile devices.
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division are supported.
- **Error Handling**: Division by zero is handled gracefully, displaying an error message to the user.
- **Dynamic Display**: The calculator dynamically adjusts the display to ensure that only the last 19 characters are visible.

## Variables

- **`buttons`**: Represents all the calculator buttons.
- **`screen`**: Represents the display screen of the calculator.
- **`current`**: Holds the current input or result of calculations.
- **`prev`**: Holds the previous input or result for binary operations.
- **`operator`**: Represents the current arithmetic operation.
- **`numbers`**: An array containing all numeric buttons.
- **`operators`**: An array containing all operator buttons.
- **`isEqualClicked`**: A flag to track whether the "=" button has been clicked.

## Functions

### `updateScreen()`

This function updates the content displayed on the calculator screen.

- **Purpose**: Ensures that the content displayed on the screen is always up-to-date with the current input.
- **Functionality**:
  - Checks the length of the current string.
  - If the length is greater than or equal to 19 characters, it displays only the last 19 characters of the current string.
  - Otherwise, it displays the entire current string.
- **Usage**: Called after every button click event to update the content displayed on the screen.

### `calculate()`

This function performs arithmetic calculations based on the stored `prev`, `current`, and `operator` values.

- **Purpose**: Calculates the result of arithmetic operations when the "=" button is clicked.
- **Functionality**:
  - Evaluates the current arithmetic operation based on the operator value.
  - Handles different arithmetic operations such as addition, subtraction, multiplication, division, and modulo.
  - Updates the `current` variable with the calculated result and then updates the screen.
- **Usage**: Called when the "=" button is clicked to perform the calculation.

### Event Listeners

- **Purpose**: Handle user interactions with the calculator buttons.
- **Functionality**:
  - Respond to button clicks by executing appropriate actions such as updating `current`, performing calculations, resetting the calculator, etc.
  - Utilize the `updateScreen()` function to ensure that the screen display reflects the current state of the calculator.
- **Usage**: Attached to each calculator button to respond to user input.

## Getting Started

To get a local copy of the project up and running, follow these steps:
1. Clone the repository:

   ```bash
   git clone https://github.com/ouhssini/Calculator.git


2. Simply open the `index.html` file in your web browser.

## Acknowledgements

This project was inspired by the need for a simple calculator application for web development practice.


## Contact

For any inquiries or feedback, please contact ahmedouhssini@gmail.com.
