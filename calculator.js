let currentNumber = []; //? string array with all characters
let lastNumber; //? last number before a calculation
let signalChoosed; //? + || - || x || /



/**
 * addNumber -> void
 * * called when a button is clicked
 * @param value String received from the button click;
 */
function addNumber(value) {
    currentNumber.push(value);
}

/** addSignal -> void
 * * called when a signal button is clicked
 * @param value signal (+ || - || / || *)
 */
function addSignal(value) {
    let screenSignal = document.getElementById('signal');

    screenSignal.innerText = value;
    let signalChoosed = value;
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
    currentNumber = [];
}

/** onDelete -> void
 * * called when you click on delete
 */
function onDelete() {
    let screenResult = document.getElementById('result');
    screenResult.innerText = '0';
    currentNumber = [];
}

/** 
 * convertToNumber -> number
 * * convert an array to Number
 * @param arr Array with all clicked numbers
*/
function convertToNumber(arr) {
    let x = '';
    for(let number in arr) {
        x += number;
    }
    return parseFloat(x);
}
