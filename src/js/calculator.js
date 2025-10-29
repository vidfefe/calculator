import {
  add,
  subtract,
  multiply,
  divide,
  percent,
  toggleSign,
  formatNumber,
} from './operations.js';

class Calculator {
  constructor() {
    this.displayElement = null;
    this.buttons = null;

    this.currentValue = '0';
    this.previousValue = null;
    this.operation = null;
    this.shouldResetDisplay = false;
  }

  init() {
    this.displayElement = document.querySelector('.display-value');
    this.buttons = document.querySelectorAll('.btn');

    this.attachEventListeners();
    this.updateDisplay();
  }

  attachEventListeners() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        this.handleButtonClick(e.target);
      });
    });

    document.addEventListener('keydown', (e) => {
      this.handleKeyPress(e);
    });
  }

  handleButtonClick(button) {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (value !== undefined) {
      this.inputNumber(value);
    } else if (action) {
      this.handleAction(action);
    }
  }

  handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
      this.inputNumber(key);
    } else if (key === '.') {
      this.handleAction('decimal');
    } else if (key === '+') {
      this.handleAction('add');
    } else if (key === '-') {
      this.handleAction('subtract');
    } else if (key === '*') {
      this.handleAction('multiply');
    } else if (key === '/') {
      event.preventDefault();
      this.handleAction('divide');
    } else if (key === 'Enter' || key === '=') {
      this.handleAction('equals');
    } else if (key === 'Escape') {
      this.handleAction('clear');
    } else if (key === '%') {
      this.handleAction('percent');
    }
  }

  inputNumber(digit) {
    if (this.shouldResetDisplay) {
      this.currentValue = digit;
      this.shouldResetDisplay = false;
    } else {
      this.currentValue =
        this.currentValue === '0' ? digit : this.currentValue + digit;
    }
    this.updateDisplay();
  }

  handleAction(action) {
    switch (action) {
      case 'clear':
        this.clear();
        break;
      case 'toggle-sign':
        this.toggleSign();
        break;
      case 'percent':
        this.calculatePercent();
        break;
      case 'decimal':
        this.addDecimal();
        break;
      case 'add':
      case 'subtract':
      case 'multiply':
      case 'divide':
        this.setOperation(action);
        break;
      case 'equals':
        this.calculate();
        break;
    }
  }

  clear() {
    this.currentValue = '0';
    this.previousValue = null;
    this.operation = null;
    this.shouldResetDisplay = false;
    this.updateDisplay();
  }

  toggleSign() {
    this.currentValue = String(toggleSign(this.currentValue));
    this.updateDisplay();
  }

  calculatePercent() {
    if (this.previousValue !== null && this.operation) {
      const percentValue = multiply(
        this.previousValue,
        percent(this.currentValue)
      );
      this.currentValue = String(percentValue);
    } else {
      this.currentValue = String(percent(this.currentValue));
    }
    this.updateDisplay();
  }

  addDecimal() {
    if (this.shouldResetDisplay) {
      this.currentValue = '0.';
      this.shouldResetDisplay = false;
    } else if (!this.currentValue.includes('.')) {
      this.currentValue += '.';
    }
    this.updateDisplay();
  }

  setOperation(op) {
    if (this.operation !== null && !this.shouldResetDisplay) {
      this.calculate();
    }

    this.previousValue = this.currentValue;
    this.operation = op;
    this.shouldResetDisplay = true;
  }

  calculate() {
    if (this.operation === null || this.previousValue === null) {
      return;
    }

    let result;
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    switch (this.operation) {
      case 'add':
        result = add(prev, current);
        break;
      case 'subtract':
        result = subtract(prev, current);
        break;
      case 'multiply':
        result = multiply(prev, current);
        break;
      case 'divide':
        result = divide(prev, current);
        break;
      default:
        return;
    }

    this.currentValue = String(result);
    this.operation = null;
    this.previousValue = null;
    this.shouldResetDisplay = true;
    this.updateDisplay();
  }

  updateDisplay() {
    const formattedValue = formatNumber(this.currentValue);
    this.displayElement.textContent = formattedValue;
  }
}

export default Calculator;
