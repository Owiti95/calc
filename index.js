let num1El = document.getElementById("num1");
let num2El = document.getElementById("num2");
let sumEl = document.getElementById("sum-el");

//function to get numbers
function getNumbers() {
    let num1 = parseInt(num1El.value) || 0; // Defaults to 0 if empty or NaN
    let num2 = parseInt(num2El.value) || 0;
    return [num1, num2];
}

//function to update the displayed numbers
function updateNumbers() {
    let [num1, num2] = getNumbers();
    document.getElementById("num1-el").textContent = "First number: " + num1;
    document.getElementById("num2-el").textContent = "Second number: " + num2;
}

//call updateNumbers when input changes
num1El.addEventListener("input", updateNumbers);
num2El.addEventListener("input", updateNumbers);

//functions for calculations
function add() {
    let [num1, num2] = getNumbers();
    sumEl.textContent = "Sum: " + (num1 + num2);
}

function subtract() {
    let [num1, num2] = getNumbers();
    sumEl.textContent = "Subtraction: " + (num1 - num2);
}

function divide() {
    let [num1, num2] = getNumbers();
    sumEl.textContent = num2 === 0 ? "Cannot divide by zero!" : "Division: " + (num1 / num2);
}

function multiply() {
    let [num1, num2] = getNumbers();
    sumEl.textContent = "Multiplication: " + (num1 * num2);
}
