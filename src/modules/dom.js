export function loadUI() {
        const leftPanel = document.getElementById("left-panel");
        const rightPanel = document.getElementById("right-panel");

        const listContainer = document.createElement('div');
        listContainer.classList.add('container');
        listContainer.classList.add('list-container');
        listContainer.textContent = "My Lists";

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('container');
        todoContainer.classList.add('todo-container');
        todoContainer.textContent = "My Todos";
        
        leftPanel.appendChild(listContainer);
        leftPanel.appendChild(todoContainer);

        const liveScreen = document.createElement('div');
        liveScreen.classList.add('live-screen');
        
        rightPanel.appendChild(liveScreen);
};

export function renderLists(lists) {
        const listContainer = document.querySelector('.list-container');
        listContainer.innerHTML = "";
        
        lists.forEach((list, index) => {
                const listElement = document.createElement('div');
                listElement.classList.add('list');
                listElement.textContent = list.name;
                listElement.dataset.index = index;

                listElement.addEventListener('click', () => renderTodos(lists[index]));

                listContainer.append(listElement);
        });
}

export function renderTodos(list) {
        const todoContainer = document.querySelector('.todo-container');
        todoContainer.innerHTML = "";
        
        list.todos.forEach((todo, index) => {
                const todoElement = document.createElement('div');
                todoElement.classList.add('todo');
                todoElement.textContent = todo.title;
                todoElement.dataset.index = index;

                todoElement.addEventListener('click', () => displayTodoDetails(todo));

                todoContainer.append(todoElement);
        });
}

function displayTodoDetails(todo) {
        const detailsContainer = document.querySelector(".live-screen");
        detailsContainer.innerHTML = `
            <h2>${todo.title}</h2>
            <p><strong>Description:</strong> ${todo.description}</p>
            <p><strong>Due Date:</strong> ${todo.dueDate}</p>
            <p><strong>Priority:</strong> ${todo.priority}</p>
        `;
    }