// 1. Create an HTML document with three elements:
// One element should have a +
// One element should have a –
// One element should show the count. This starts at 0.
// Event listeners should be set up to modify the count and display the current count on screen as follows:

// 2. When a user clicks the + element, the count should increase by 1 on screen.
// 3. When a user clicks the – element, the count should decrease by 1 on screen.

let numberOfProcess = 0;
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const num = document.querySelector('.num');
const clickHandler = () => {
    numberOfProcess++;
    num.innerHTML = numberOfProcess;
};

const clickHandler2 = () => {
    numberOfProcess--;
    num.innerHTML = numberOfProcess;
};

add.addEventListener('click', clickHandler);
subtract.addEventListener('click', clickHandler2)