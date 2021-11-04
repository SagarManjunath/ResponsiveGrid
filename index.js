let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let colors = ['#000000', '#2B8EAD', '#333333', '#72C3DC', '#EFEFEF', '#72C3DC', '#6F98A8', '#BFBFBF', '#2F454E']
var order = false;
const container = document.getElementById("cards");
onload(values);

// method to load grid
function onload(values, isGrad = false) {
    for (c = 0; c < values.length; c++) {
        let cell = document.createElement("div");
        cell.className = 'card';
        cell.style.backgroundColor = colors[c];
        if (isGrad || window.innerWidth < 600) {
            cell.style.background = 'linear-gradient(to right,' + colors[c] + ' 5%,#8080806b 5%)';
        }

        cell.innerText = values[c];
        container.appendChild(cell);
    };
}

//method to sort items
function doSort() {
    order = !order;
    removeAllChildNodes(container);
    values.sort((a, b) => order ? a - b : b - a);
    onload(values);
}

// method to remove cards
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//method to shuffle items
function shuffle() {
    removeAllChildNodes(container);
    values.sort(() => Math.random() - 0.5);
    onload(values);
}

//method to apply css gradient when resolution changes
function applyCss() {
    if (window.innerWidth < 600) {
        removeAllChildNodes(container);
        onload(values, true)
    }
    else {
        removeAllChildNodes(container);
        onload(values, false)
    }

}
