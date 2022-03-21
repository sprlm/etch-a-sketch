function createGrid(container, gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        const row = document.createElement('div');

        row.classList.add('row');
        row.style.flex = '1';
        row.style.display = 'flex';

        container.appendChild(row);

        for (let cols = 0; cols < gridSize; cols++) {
            const gridSquare = document.createElement('div');
            gridSquare.addEventListener('mouseover', (e) => {
                e.target.classList.add('hover');
            });

            gridSquare.classList.add('grid-square');
            gridSquare.style.flex = '1';

            row.appendChild(gridSquare);
        }
    }
}

function resetGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((gridSquare) => {
        gridSquare.classList.remove('hover');
    });
}

let gridSize = 16;
const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', resetGrid);

createGrid(container, gridSize);
