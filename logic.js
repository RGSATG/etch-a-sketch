const container = document.querySelector("#container");
const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");

function addDivs(containerSize, divCount) {
    for (let i = 0; i < divCount * divCount; i++) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = div.style.height = `${containerSize / divCount - 2}px`;
        container.appendChild(div);
    }
}

button.addEventListener("click", () => {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    if (input.value <= 100) {
        p.textContent = "The resolution of the Etch-A-Sketch can be changed here";
        addDivs(600, input.value);
    } else {
        p.textContent = "Please select a value which is equal to or lower than 100";
    }
}
);