const inputElement = document.getElementById('input');

function clearInput() {
  inputElement.value = '';
}

function appendNumber(number) {
  inputElement.value += number;
}

function appendDecimal() {
  if (!inputElement.value.includes('.')) {
    inputElement.value += '.';
  }
}

function changeSign() {
  inputElement.value = parseFloat(inputElement.value) * -1;
}

function percentage() {
  inputElement.value = parseFloat(inputElement.value) / 100;
}

let operator = null;
let previousValue = null;

function operate(newOperator) {
  if (operator !== null) {
    calculateResult();
  }
  operator = newOperator;
  previousValue = parseFloat(inputElement.value);
  inputElement.value = '';
}

function calculateResult() {
  if (operator === null) {
    return;
  }
  const currentValue = parseFloat(inputElement.value);
  let result;
  switch (operator) {
    case '+':
      result = previousValue + currentValue;
      break;
    case '-':
      result = previousValue - currentValue;
      break;
    case '*':
      result = previousValue * currentValue;
      break;
    case '/':
      result = previousValue / currentValue;
      break;
    default:
      return;
  }
  inputElement.value = result.toString();
  operator = null;
  previousValue = null;
}

document.addEventListener('keydown', event => {
  const key = event.key;
  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key === '.') {
    appendDecimal();
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    operate(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Escape') {
    clearInput();
  }
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});