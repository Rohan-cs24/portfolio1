// Calculator JavaScript
class Calculator {
    constructor() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = null;
        this.waitingForNewOperand = false;
        this.history = '';
        
        this.display = document.getElementById('display');
        this.historyDisplay = document.getElementById('history');
        
        this.initializeButtons();
        this.attachKeyboardListeners();
        this.updateDisplay();
    }

    initializeButtons() {
        // Number buttons
        document.querySelectorAll('.btn-number').forEach(button => {
            button.addEventListener('click', () => {
                if (button.id === 'decimal') {
                    this.inputDecimal();
                } else {
                    this.inputNumber(button.textContent);
                }
                this.animateButton(button);
            });
        });

        // Operator buttons
        document.querySelectorAll('.btn-operator').forEach(button => {
            button.addEventListener('click', () => {
                switch (button.id) {
                    case 'add':
                        this.setOperation('+');
                        break;
                    case 'subtract':
                        this.setOperation('-');
                        break;
                    case 'multiply':
                        this.setOperation('*');
                        break;
                    case 'divide':
                        this.setOperation('/');
                        break;
                    case 'percentage':
                        this.percentage();
                        break;
                    case 'backspace':
                        this.backspace();
                        break;
                }
                this.animateButton(button);
            });
        });

        // Special buttons
        document.getElementById('equals').addEventListener('click', () => {
            this.calculate();
            this.animateButton(document.getElementById('equals'));
        });

        document.getElementById('clear').addEventListener('click', () => {
            this.clear();
            this.animateButton(document.getElementById('clear'));
        });

        document.getElementById('clearEntry').addEventListener('click', () => {
            this.clearEntry();
            this.animateButton(document.getElementById('clearEntry'));
        });
    }

    attachKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault(); // Prevent default browser behavior
            
            if (e.key >= '0' && e.key <= '9') {
                this.inputNumber(e.key);
                this.highlightButton('btn-number');
            } else if (e.key === '.') {
                this.inputDecimal();
                this.highlightButton('decimal');
            } else if (e.key === '+') {
                this.setOperation('+');
                this.highlightButton('add');
            } else if (e.key === '-') {
                this.setOperation('-');
                this.highlightButton('subtract');
            } else if (e.key === '*') {
                this.setOperation('*');
                this.highlightButton('multiply');
            } else if (e.key === '/') {
                this.setOperation('/');
                this.highlightButton('divide');
            } else if (e.key === '%') {
                this.percentage();
                this.highlightButton('percentage');
            } else if (e.key === 'Enter' || e.key === '=') {
                this.calculate();
                this.highlightButton('equals');
            } else if (e.key === 'Escape') {
                this.clear();
                this.highlightButton('clear');
            } else if (e.key === 'Backspace') {
                this.backspace();
                this.highlightButton('backspace');
            }
        });
    }

    inputNumber(number) {
        if (this.waitingForNewOperand) {
            this.currentOperand = number;
            this.waitingForNewOperand = false;
        } else {
            if (this.currentOperand === '0') {
                this.currentOperand = number;
            } else {
                // Limit to 12 digits
                if (this.currentOperand.replace('.', '').length < 12) {
                    this.currentOperand += number;
                }
            }
        }
        this.updateDisplay();
    }

    inputDecimal() {
        if (this.waitingForNewOperand) {
            this.currentOperand = '0.';
            this.waitingForNewOperand = false;
        } else if (this.currentOperand.indexOf('.') === -1) {
            this.currentOperand += '.';
        }
        this.updateDisplay();
    }

    setOperation(nextOperation) {
        const inputValue = parseFloat(this.currentOperand);

        if (this.previousOperand === '') {
            this.previousOperand = inputValue;
        } else if (this.operation) {
            const currentValue = this.previousOperand || 0;
            const newValue = this.performCalculation();
            
            if (newValue === null) return; // Error occurred
            
            this.currentOperand = String(newValue);
            this.previousOperand = newValue;
        }

        this.waitingForNewOperand = true;
        this.operation = nextOperation;
        
        // Update history display
        this.updateHistory();
        this.updateDisplay();
        
        // Visual feedback for active operation
        this.clearActiveOperators();
        this.setActiveOperator(nextOperation);
    }

    calculate() {
        if (this.operation && !this.waitingForNewOperand) {
            const result = this.performCalculation();
            
            if (result === null) return; // Error occurred
            
            // Add to history
            this.history = `${this.previousOperand} ${this.getOperatorSymbol(this.operation)} ${this.currentOperand} =`;
            
            this.currentOperand = String(result);
            this.previousOperand = '';
            this.operation = null;
            this.waitingForNewOperand = true;
            
            this.updateDisplay();
            this.clearActiveOperators();
            
            // Animate result
            this.animateResult();
        }
    }

    performCalculation() {
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return null;
        
        let result;
        
        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    return null;
                }
                result = prev / current;
                break;
            default:
                return null;
        }
        
        // Round to avoid floating point precision issues
        result = Math.round((result + Number.EPSILON) * 100000000) / 100000000;
        
        // Check for infinity or very large numbers
        if (!isFinite(result)) {
            this.showError('Result too large');
            return null;
        }
        
        // Limit decimal places for display
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(8));
        }
        
        return result;
    }

    percentage() {
        const value = parseFloat(this.currentOperand);
        if (!isNaN(value)) {
            this.currentOperand = String(value / 100);
            this.updateDisplay();
            this.waitingForNewOperand = true;
        }
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = null;
        this.waitingForNewOperand = false;
        this.history = '';
        this.updateDisplay();
        this.clearActiveOperators();
    }

    clearEntry() {
        this.currentOperand = '0';
        this.updateDisplay();
    }

    backspace() {
        if (!this.waitingForNewOperand) {
            if (this.currentOperand.length > 1) {
                this.currentOperand = this.currentOperand.slice(0, -1);
            } else {
                this.currentOperand = '0';
            }
            this.updateDisplay();
        }
    }

    updateDisplay() {
        // Format the display value
        let displayValue = this.currentOperand;
        
        // Add commas for large numbers
        if (!displayValue.includes('.') && displayValue.length > 3 && displayValue !== '0') {
            const number = parseInt(displayValue);
            if (!isNaN(number)) {
                displayValue = number.toLocaleString();
            }
        }
        
        this.display.textContent = displayValue;
        this.historyDisplay.textContent = this.history;
    }

    updateHistory() {
        if (this.operation && this.previousOperand !== '') {
            this.history = `${this.previousOperand} ${this.getOperatorSymbol(this.operation)}`;
        }
    }

    getOperatorSymbol(operation) {
        switch (operation) {
            case '+': return '+';
            case '-': return '−';
            case '*': return '×';
            case '/': return '÷';
            default: return '';
        }
    }

    setActiveOperator(operation) {
        const buttonId = this.getOperatorButtonId(operation);
        if (buttonId) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.classList.add('active');
            }
        }
    }

    clearActiveOperators() {
        document.querySelectorAll('.btn-operator').forEach(button => {
            button.classList.remove('active');
        });
    }

    getOperatorButtonId(operation) {
        switch (operation) {
            case '+': return 'add';
            case '-': return 'subtract';
            case '*': return 'multiply';
            case '/': return 'divide';
            default: return null;
        }
    }

    animateButton(button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 150);
    }

    highlightButton(buttonId) {
        const button = document.getElementById(buttonId);
        if (button) {
            this.animateButton(button);
        } else {
            // For multiple elements with same class
            const buttons = document.querySelectorAll(`.${buttonId}`);
            buttons.forEach(btn => this.animateButton(btn));
        }
    }

    animateResult() {
        this.display.style.transform = 'scale(1.05)';
        this.display.style.color = '#27ae60';
        
        setTimeout(() => {
            this.display.style.transform = 'scale(1)';
            this.display.style.color = 'white';
        }, 300);
    }

    showError(message) {
        const displaySection = document.querySelector('.display-section');
        displaySection.classList.add('error');
        
        this.display.textContent = 'Error';
        this.historyDisplay.textContent = message;
        
        setTimeout(() => {
            displaySection.classList.remove('error');
            this.clear();
        }, 2000);
        
        // Show notification
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideInNotification 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        `;
        
        switch (type) {
            case 'error':
                notification.style.background = 'linear-gradient(45deg, #e74c3c, #c0392b)';
                break;
            case 'success':
                notification.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';
                break;
            default:
                notification.style.background = 'linear-gradient(45deg, #3498db, #2980b9)';
        }
        
        // Add animation styles if not already present
        if (!document.querySelector('style[data-calculator-notification]')) {
            const style = document.createElement('style');
            style.setAttribute('data-calculator-notification', 'true');
            style.textContent = `
                @keyframes slideInNotification {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInNotification 0.3s ease reverse';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 3000);
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new Calculator();
});

// Prevent context menu on calculator buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

// Add visual feedback for button hover
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.02)';
    });
    
    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('pressed')) {
            button.style.transform = 'scale(1)';
        }
    });
});
