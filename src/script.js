let currentInput = '0';
let operator = '';
let result = 0;

function clearDisplay() {
    currentInput = '0';
    operator = '';
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperator(newOperator) {
    operator = newOperator;
    if (currentInput !== '0') {
        result = parseFloat(currentInput);
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    if (operator === '+') {
        result += parseFloat(currentInput);
    } else if (operator === '-') {
        result -= parseFloat(currentInput);
    } else if (operator === '*') {
        result *= parseFloat(currentInput);
    } else if (operator === '/') {
        result /= parseFloat(currentInput);
    }
    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

function calculatePercentage() {
    result = parseFloat(currentInput) / 100;
    currentInput = result.toString();
    updateDisplay();
}

function calculateSquareRoot() {
    result = Math.sqrt(parseFloat(currentInput));
    currentInput = result.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
