// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const table = document.querySelector('table');

function getClickPosition(e) {
    let xPosition = e.clientX;
    let yPosition = e.clientY;
    let tgt = e.target;

    console.log(tgt);
    tgt.innerHTML = `${xPosition} and ${yPosition}`;
    console.log(tgt.innerHTML);
    console.log(`${xPosition} and ${yPosition}`);
}

table.addEventListener('click', getClickPosition)
