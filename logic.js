const container = document.querySelector("#container");

function addDivs(containerSize, divCount) {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = div.style.height = `${containerSize / divCount - 2}px`;
        container.appendChild(div);
    }
}
addDivs(600, 4);