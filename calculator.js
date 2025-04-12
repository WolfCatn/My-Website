function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (value === '√') {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.sqrt(currentValue);
        }
    }
    else if (value === '^2') {
        const currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            display.value = Math.pow(currentValue, 2);
        }
    }
    else if (value === '!') {
        const currentValue = parseInt(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
            display.value = factorial(currentValue);
        } else {
            display.value = 'Error';
        }
    }
    else {
        display.value += value;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}