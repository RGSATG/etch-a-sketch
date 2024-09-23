const container = document.querySelector("#container");
const input = document.querySelector("input");
const changeButton = document.querySelector("#changeButton");
const p = document.querySelector("p");
const containerSize = 600;
let divCount = 0;

function createDiv() {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.width = div.style.height = `${containerSize / divCount - 2}px`;
    div.addEventListener("mouseover", (e) => e.target.style.backgroundColor = "black");
    return div;
}

function addDivs() {
    for (let i = 0; i < divCount * divCount; i++) {
        const newDiv = createDiv();
        container.appendChild(newDiv);
    }
}

function clearContainer() {
    input.value = "";
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

changeButton.addEventListener("click", () => {
    divCount = input.value;
    input.value = "";
    clearContainer();
    if (divCount <= 100 && divCount > 0) {
        p.textContent = "The resolution of the Etch-A-Sketch can be changed here";
        addDivs();
    } else {
        p.textContent = "Please select a value >= 1 and <= 100";
    }
}
);