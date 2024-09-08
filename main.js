class Calculator {
  constructor() {
    this.display = '';
    this.operator = '';
    this.firstOperand = '';
    this.secondOperand = '';
    this.result = '';
  }

  appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.operator = value;
      this.firstOperand = this.display;
      this.display = '';
      this.result = '';
    } else if (value === '%') {
      this.operator = value;
      this.firstOperand = this.display;
      this.display = '';
      this.result = '';
    } else if (value === '.') {
      if (!this.display.includes('.')) {
        this.display += value;
      }
    }
    else if (value === '=') {
        if (this.firstOperand !== '') { 
            this.secondOperand = this.display;
            this.calculate();
            this.display = this.result;
            this.firstOperand = '';
            this.secondOperand = '';
        } else {
            console.log('Error');
        }
    }
    else {
        if (this.result === '') {
            this.display += value;
        } else {
            this.display = '';
            this.result = '';
        }
    }
  }

  calculate() {
    let result;
    switch (this.operator) {
      case '+':
        result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
        break;
      case '-':
            result = Number(parseFloat(this.firstOperand) - parseFloat(this.secondOperand)).toFixed(2);
        break;
      case '*':
        result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
        break;
      case '/':
        result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
        break;
        case '%':
        result = (parseFloat(this.firstOperand) * parseFloat(this.secondOperand)) / 100;
        break;
      default:
        result = 'Error';
    } 
        this.result = result.toString();
  }

  clearDisplay() {
    this.display = '';
    this.operator = '';
    this.firstOperand = '';
    this.secondOperand = '';
  }
}

const calculator = new Calculator();

document.getElementById('display').value = '0';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        calculator.appendToDisplay(value);
        document.getElementById('display').value = calculator.display;
    });
});

document.getElementById('clear').addEventListener('click', () => {
    calculator.clearDisplay();
    document.getElementById('display').value = '';
});

