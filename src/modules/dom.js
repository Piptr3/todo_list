export function loadUI() {
        const leftPanel = document.getElementById("left-panel");
        const rightPanel = document.getElementById("right-panel");

        const listContainer = document.createElement('div');
        listContainer.classList.add('container');
        listContainer.classList.add('containerL');
        listContainer.textContent = "My Lists";

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('container');
        todoContainer.classList.add('containerT');
        todoContainer.textContent = "My Todos";
        
        leftPanel.appendChild(listContainer);
        leftPanel.appendChild(todoContainer);

        const liveScreen = document.createElement('div');
        liveScreen.classList.add('liveScreen');
        
        rightPanel.appendChild(liveScreen);
};

export function renderLists(lists) {
        const listContainer = document.querySelector('.containerL');
        
        lists.forEach(list => {
                const listElement = document.createElement('div');
                listElement.classList.add('list');
                listElement.textContent = list.name;
                listContainer.append(listElement);
        });
}

export function renderTodos(list) {
        const todoContainer = document.querySelector('.containerT');
        
        list.todos.forEach(todo => {
                const todoElement = document.createElement('div');
                todoElement.classList.add('todo');
                todoElement.textContent = todo.title;
                todoContainer.append(todoElement);
        });
}