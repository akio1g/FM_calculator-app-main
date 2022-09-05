
let arrayCurrentNumber = []; //? string array with all characters
let lastNumber; //? last number before a calculation
let signalChoosed; //? + || - || x || /
let hasDot = false;

/**
 * addNumber -> void
 * * called when a button is clicked
 * @param value String received from the button click;
 */
function addNumber(value) {
    let screenResult = document.getElementById('result');
    
    if(value === '.') {
        if( !hasDot ) {
            arrayCurrentNumber.push(value);
            hasDot = true;
        }
    } else {
        arrayCurrentNumber.push(value);
    }
    
    screenResult.innerText = convertToNumber(arrayCurrentNumber);
}

/** addSignal -> void
 * * called when a signal button is clicked
 * @param value signal (+ || - || / || x)
 */
function addSignal(value) {
    let screenResult = document.getElementById('result');
    let screenSignal = document.getElementById('signal');

    lastNumber = parseFloat(screenResult.textContent);
    clearCurrentNumber();
    screenSignal.innerText = value;
    signalChoosed = value;
}

/** calculation
 * * do the math calculation
 * @param {Number before signal} x 
 * @param {Number after signal} y 
 * @returns the result
 */
function calculation(x, y) {
    let final = 0;

    switch(signalChoosed) {
        case '+':
            final = x + y;
            break;
        case '-':
            final = x - y;
            break;
        case 'x':
            final = x * y;
            break;
        case '/':
            final = x / y;
            break;
        default:
            alert('Not recognized signal');
    }

    return final;
}

/** reset -> void
 * * called when you click on reset
 */
function reset() {
    let screenResult = document.getElementById('result');
    let screenSignal = document.getElementById('signal');


    screenSignal.innerText = '';
    screenResult.innerText = '0';
    signalChoosed = '';
    lastNumber = 0;
    clearCurrentNumber();
}

/** onDelete -> void
 * * called when you click on delete
 */
function onDelete() {
    let screenResult = document.getElementById('result');
    screenResult.innerText = '0';
    clearCurrentNumber();
}

/** 
 * convertToNumber -> number
 * * convert an array to Number
 * @param arr Array with all clicked numbers
*/
function convertToNumber(arr) {
    let x = '';
    for(let number of arr) {
        x += number;
    }
    return x;
}

/** 
 *  * Show the result on screen
 */
function doResult() {
    let screenResult = document.getElementById('result');
    const secondValue = parseFloat(screenResult.textContent);

    const finalResult = calculation(lastNumber, secondValue).toFixed(2);
    screenResult.innerText = `${finalResult}`;
}

/**
 * * Clear current number
 */
function clearCurrentNumber() {
    arrayCurrentNumber = [];
    hasDot = false;
}