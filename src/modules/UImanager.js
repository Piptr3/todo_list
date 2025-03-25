export function loadUI() {
    const header = document.getElementById("header");
    loadMain();
    const footer = document.getElementById("footer");
}

function loadMain() {
    const main = document.getElementById("main");
    const container = document.createElement("div");
    container.classList.add("main-container");
    container.textContent = "temp text";

    main.appendChild(container);
}