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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function getNewGridSize() {
    let newSize;

    do {
        newSize = prompt('Please enter the new grid size (1-100):');

        if (newSize === null) {
            return gridSize;
        }

    } while (!/^-?\d+$/.test(newSize) || (newSize < 1 || newSize > 100));

    return newSize;
}

function resetGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach((gridSquare) => {
        gridSquare.classList.remove('hover');
    });

    removeAllChildNodes(container);
    gridSize = getNewGridSize();
    createGrid(container, gridSize);
}

let gridSize = 30;
const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', resetGrid);

createGrid(container, gridSize);
