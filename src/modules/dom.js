export function loadUI() {
        const leftPanel = document.getElementById("left-panel");
        const rightPanel = document.getElementById("right-panel");

        const listContainer = document.createElement('div');
        listContainer.classList.add('container');
        listContainer.innerHTML = "My Lists";

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('container');
        todoContainer.innerHTML = "My Todos";
        
        leftPanel.appendChild(listContainer);
        leftPanel.appendChild(todoContainer);
};