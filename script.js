function createGrid(container, gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex';
        container.appendChild(row);
        for (let cols = 0; cols < gridSize; cols++) {
            const div = document.createElement('div');
            div.classList.add('grid-square');
            div.style.width = '50px';
            div.style.height = '50px';
            row.appendChild(div);
        }
    }
}

let gridSize = 16;
const container = document.querySelector('#container');

createGrid(container, gridSize);