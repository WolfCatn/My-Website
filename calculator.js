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
    else {
        display.value += value;
    }
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