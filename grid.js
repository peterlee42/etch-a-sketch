// Global Variables
grid = document.querySelector("#grid");
colourMode = false;
darkenEffect = false;

// Create Grid 
function createGrid(res) {
    for (i = 0; i < res * res; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("style", `width: ${50 / res}vw; height: ${50 / res}vw;`);
        grid.appendChild(cell);
    }
}


// Change Resolution
const resButton = document.querySelector("button.resolution");

resButton.addEventListener("click", () => {
    let userResolution = Number(prompt("Enter the desired number of squares per side for the new grid"));
    if (userResolution > 100 || userResolution < 1) {
        alert("Input must be between 1 and 100 (inclusive)");
        return;
    }

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(userResolution);
    addHoverEffect();
});


// Hover Effect
function addHoverEffect() {
    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((currCell) => {
        currCell.addEventListener("mouseover", () => {
            if (colourMode) {
                currCell.style.backgroundColor = `rgb(${randomIntGen(255)}, ${randomIntGen(255)}, ${randomIntGen(255)})`
            }
            else {
                currCell.style.backgroundColor = `rgb(0,0,0)`;
            }
        });
    });
}


// Reset Button
const resetButton = document.querySelector("button.reset");

resetButton.addEventListener("click", resetGrid);

// Reset Grid
function resetGrid() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((currCell) => {
        currCell.style.backgroundColor = "white";
    });
}


// Random Integer Generator
function randomIntGen(n) {
    return Math.floor(Math.random() * n);
}


// Colour Button
const colourButton = document.querySelector("button.colourMode");

colourButton.addEventListener("click", () => {
    colourMode = true;
});


// BNW Button
const defaultButton = document.querySelector("button.default");

defaultButton.addEventListener("click", () => {
    colourMode = false;
});


// Initialize
createGrid(16);
addHoverEffect();