const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexWrap = "wrap";

function randomNumber(num) {
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}
function createGrid(numOfSquares) {
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("squares");
        container.appendChild(div);
        div.style.width = `calc(100% / ${numOfSquares})`;
        div.style.paddingBottom = `calc(100% / ${numOfSquares})`;
        div.style.boxSizing = "border-box";

        div.addEventListener("mouseover", () => {
            const randomR = randomNumber(255);
            const randomG = randomNumber(255);
            const randomB = randomNumber(255);
            div.style.backgroundColor = `rgb(${randomR} ${randomG} ${randomB} )`;

        })


    }
}

createGrid(16);

const button = document.querySelector("button");
button.textContent = "Generate new grid";
button.addEventListener("click", () => {
    numOfSquares = prompt("enter a new grid size");
    if (numOfSquares > 100) {
        numOfSquares = prompt("enter a new grid size under 100");
    }
    container.innerHTML = "";
    createGrid(numOfSquares);

})


