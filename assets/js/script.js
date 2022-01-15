//* * * *~ START OF SCRIPT ~* * * * //
var body = document.body;

// h1 headline //
// passing the element, storing the value in a variable //

var h1El = document.createElement('h1');

// h1, text context //

h1El.textContent = 'Do you want to take a quiz?';

// h1, style //

h1El.setAttribute('style', 'margin:auto', 'width:50%;');

h1El.style.textAlign = 'center'; 

// h1, append to the DOM //

body.appendChild(h1El);


// variable to hole the count //

var count = 0

// querySelector to select the elements //

var countEl = document.querySelector('#count');
var stringsEl = document.querySelector('#strings');
var booleansEl = document.querySelector('#booleans');
var alertsEl = document.querySelector('#alerts');
var numbersEl = document.querySelector('#numbers');

// to display the count on page //

function setCounterText() {
    countEl.textContent = count;
}

// to increase count on the page // 

booleansEl.addEventListener('click', function() {
    count++;
    setCounterText();
});

// to decrease the count on click //

stringsEl.addEventListener('click', function() {
alertsEl.addEventListener('click', function() {
numbersEl.addEventListener('click', function() {
    if (count > 0) {
        count --;
        setCounterText();
}
});

document.querySelector('#booleans').addEventListener();