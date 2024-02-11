let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += ` ${operator} `;
  updateDisplay();
}

function appendFunction(func) {
  if (func === 'sqrt') {
    currentInput += `Math.sqrt(${getPreviousNumber()})`;
  } else if (func === 'percent') {
    const previousNumber = getPreviousNumber();
    const percentageValue = (parseFloat(previousNumber) / 100).toString();
    currentInput = currentInput.replace(new RegExp(`\\b${previousNumber}\\b`), percentageValue);
  }

  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    display.value = 'Error';
  }
}

function getPreviousNumber() {
  const inputArray = currentInput.split(/[\+\-\*\/]/);
  return inputArray[inputArray.length - 1];
}

function updateDisplay() {
  display.value = currentInput;
}
