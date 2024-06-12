const gridNumberInput = document.getElementById("grid-number");
const container = document.getElementById("container");
const errorMsg = document.getElementById("error");
const clearBtn = document.getElementById("clear-btn");
const colorPicker = document.getElementById("color-picker");

window.onload = function() {
    gridNumberInput.value = 5;
    createGrid();
};

function createGrid() {
    let gridNumber = gridNumberInput.value;

    if (gridNumber > 50) {
        errorMsg.innerHTML = "Please enter a number smaller than 51";
    } else if (gridNumber < 1) {
         errorMsg.innerHTML = "Please enter a number greater than 0";
    } else {
        errorMsg.innerHTML = "";
        container.innerHTML = "";

        const containerWidth = 800;
        const containerHeight = 800;

        container.style.width = `${containerWidth}px`;
        container.style.height = `${containerHeight}px`;
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';

        const squareWidth = containerWidth / gridNumber;
        const squareHeight = containerHeight / gridNumber;

        for (let i = 0; i < gridNumber * gridNumber; i++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.width = `${squareWidth}px`;
            gridSquare.style.height = `${squareHeight}px`;
            gridSquare.style.border = '1px solid #ccc';
            gridSquare.style.backgroundColor = '#fff';
            gridSquare.style.boxSizing = 'border-box';

            container.appendChild(gridSquare);
        }

        let isMouseDown = false;
        container.addEventListener("mousedown", () => {
            isMouseDown = true;
        });

        container.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        container.addEventListener("mouseover", (e) => {
            if (isMouseDown && e.target.classList.contains("grid-square")) {
                e.target.style.backgroundColor = colorPicker.value;
            }
        });

        // Event listener for clearing color on button click
        clearBtn.addEventListener("click", () => {
            container.querySelectorAll(".grid-square").forEach(square => {
                square.style.backgroundColor = "#fff";
            });
        });
    }
}