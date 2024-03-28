document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById("container");
    let blockWidthAmount = 16;
    let blockHeightAmount = 16;
    let setSize = document.getElementById("setSize");

    function createGrid (width, height) {

        container.innerHTML = '';
        
        for (i = 0; i < width; i++) {

            let row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
        
            for (f = 0; f < height; f++) {
                let block = document.createElement("div");
                block.className = "block";
                row.appendChild(block);
                block.addEventListener("mouseover", hover);
        
                function hover() {
                    block.style.backgroundColor = "yellow";
                }
            }
        }
    }

    window.onload = createGrid(blockWidthAmount, blockHeightAmount);

    setSize.addEventListener("click", resize);

    function resize() {
        let getWidth = prompt("Enter the width from 1 to 100", "16");
        let getLength = prompt("Enter the length from 1 to 100", "16");
        if(getWidth > 99 || getLength > 99) {
            alert("Error, width or length were too long. Try again.");
            return;
        }
        createGrid(getWidth, getLength);
    }

  });


