const container = document.querySelector("#container");
const input = document.querySelector("input");
const button = document.querySelector("button");

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
    addDivs(600, input.value);
}
);