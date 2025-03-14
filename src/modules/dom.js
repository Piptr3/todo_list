export function loadUI() {
        const leftPanel = document.getElementById("left-panel");
        const rightPanel = document.getElementById("right-panel");

        const listContainer = document.createElement('div');
        listContainer.classList.add('container');
        listContainer.classList.add('list-container');

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('container');
        todoContainer.classList.add('todo-container');

        const topText = document.createElement('p');
        topText.textContent = "My Lists";

        const bottomText = document.createElement('p');
        bottomText.textContent = "My Todos";
        
        leftPanel.appendChild(topText);
        leftPanel.appendChild(listContainer);

        leftPanel.appendChild(bottomText);
        leftPanel.appendChild(todoContainer);

        const liveScreen = document.createElement('div');
        liveScreen.classList.add('live-screen');
        
        const rpText = document.createElement('p');
        rpText.textContent = "To Do";

        rightPanel.appendChild(rpText);
        rightPanel.appendChild(liveScreen);
};
