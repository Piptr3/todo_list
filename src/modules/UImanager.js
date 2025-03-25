export function loadUI() {
    loadHeader();
    loadSidebar();
    loadMain();
    loadFooter();
}

function loadHeader() {
    const header = document.getElementById("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Todo List";

    header.appendChild(logo);

}

function loadSidebar() {
    const sidebar = document.getElementById("sidebar");
}

function loadMain() {
    const main = document.getElementById("main");

    const container = document.createElement("div");
    container.classList.add("main-container");
    container.textContent = "temp text";

    main.appendChild(container);
}

function loadFooter() {
    const footer = document.getElementById("footer");

    const copyright = document.createElement("div");
    copyright.classList.add("copyright");
    copyright.textContent = "Copyright @ 2025 Piptr3" 

    footer.appendChild(copyright);
}