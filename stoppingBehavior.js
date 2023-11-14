// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfo = document.getElementById('more-info');
function alertInfo (e) {
  e.preventDefault();
  alert("Here\'s some info");
}
moreInfo.addEventListener('click', alertInfo);
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const bork = document.querySelector('.dog');
function borkBork (e) {
//  e.preventDefault();
  alert("Bow wow!");
  e.stopPropagation();
}
bork.addEventListener('click', borkBork)