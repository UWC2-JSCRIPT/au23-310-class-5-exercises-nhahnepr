// If an li element is clicked, toggle the class "done" on the <li>

let uList = document.querySelector(".today-list");
uList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
//    alert(`${e.target.innerHTML} This task is done`);
  }
})

// If a delete link is clicked, delete the li element / remove from the DOM

let deleteItem = document.querySelector('.delete');
deleteItem.addEventListener('click', items)
function items(item) {
    if (item.target.classList.contains('delete')) {
        item.target.parentElement.remove();
    }
}

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  let toDoItem = document.createElement('li');
  toDoItem.appendChild(text);
  if (text === '') {
    alert ("Enter something!");
  } else {
    document.getElementById("today-list").appendChild(toDoItem);
  }
  document.getElementById('input').value = '';
  // Finish function here
};

let addItem = document.querySelector('.add-item');
addItem.addEventListener('click', addListItem)