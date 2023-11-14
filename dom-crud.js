// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let newAElement = document.createElement('a');
newAElement.setAttribute('id','cta');
newAElement.innerText = 'Buy Now!';
let aTag = document.querySelector('a');
aTag.after(newAElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
let car = document.querySelector('img');
console.log(car.dataset.color)
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let thirdLi = document.getElementsByTagName('li')[2];
thirdLi.className = 'highlight'

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let domP = document.getElementsByTagName('p')[0];
domP.parentNode.removeChild(domP)