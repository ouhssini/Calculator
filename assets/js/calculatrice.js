let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let current = "0";
let prev = null;
let operator = null;
let numbers = ["0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operators = ["+", "-", "*", "/", "%"];

// Function to update the content of the screen
function updateScreen() {
  screen.innerText = current;
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(prev) + parseFloat(current);
      break;
    case "-":
      result = parseFloat(prev) - parseFloat(current);
      break;
    case "*":
      result = parseFloat(prev) * parseFloat(current);
      break;
    case "/":
      if (parseFloat(current) === 0) {
        result = "Can't divide by Zero"; // Error handling for division by zero
      } else {
        result = parseFloat(prev) / parseFloat(current);
      }
      break;
    case "%":
      result = parseFloat(prev) % parseFloat(current);
      break;
    default:
      result = "Error";
  }
  current = result.toString();
  operator = null;
  updateScreen();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let btnValue = btn.innerText;
    if (btnValue === "AC") {
      current = "0";
      prev = null;
      operator = null;
      updateScreen();
    } else if (btnValue === "DEL") {
      if (current.length === 1) {
        current = "0";
      } else {
        current = current.slice(0, -1);
      }
      updateScreen();
    } else if (btnValue === "." && current.indexOf(".") === -1) {
      current += ".";
      updateScreen();
    } else if (numbers.includes(btnValue)) {
      if (current === "0") {
        current = btnValue === "00" ? "0" : btnValue;
      } else {
        current += btnValue;
      }
      updateScreen();
    } else if (operators.includes(btnValue)) {
      if (prev === null) {
        prev = current;
        current = "0";
        operator = btnValue;
        updateScreen();
      } else {
        calculate();
        prev = current;
        current = "0";
        operator = btnValue;
      }
     
    } else if (btnValue === "=") {
      if (prev !== null && operator !== null) {
        calculate();
      }
    }
  });
});
