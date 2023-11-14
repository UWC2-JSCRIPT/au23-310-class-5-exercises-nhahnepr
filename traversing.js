// Given the <body> element as variable body,
// access the <main> node and log to the console.
const bodyEx = document.querySelector('body');
console.log(bodyEx.firstElementChild.nodeName);
// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ulEx = document.querySelector('ul');
console.log(ulEx.parentNode.parentNode.nodeName);
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const pEx = document.querySelector('p');
console.log(pEx.previousElementSibling.childNodes[2].nodeName)