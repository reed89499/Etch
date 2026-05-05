function genRow (width, parent) {
    let i = 0;
    while (i < width) {
        let span = document.createElement('span');
        span.textContent = i;
        parent.appendChild(span);
        i++;
    }
}
const container = document.querySelector('#container');
function getColumns (height, width) {
    let i = 0;
    while (i < height) {
        let div = document.createElement('div')
        genRow(width, div);
        container.appendChild(div);
        i++;
    }
}

getColumns(16, 16);