export function loadUI() {
        const leftPanel = document.getElementById("left-panel");
        const rightPanel = document.getElementById("right-panel");

        const listContainer = document.createElement('div');
        listContainer.classList.add('container');
        listContainer.textContent = "My Lists";

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('container');
        todoContainer.textContent = "My Todos";
        
        leftPanel.appendChild(listContainer);
        leftPanel.appendChild(todoContainer);

        const liveScreen = document.createElement('div');
        liveScreen.classList.add('liveScreen');
        
        rightPanel.appendChild(liveScreen);
};