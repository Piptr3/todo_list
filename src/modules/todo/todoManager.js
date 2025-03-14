export function renderTodos(list, lists) {
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.innerHTML = "";
    
    list.todos.forEach((todo, index) => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            todoElement.textContent = todo.title;
            todoElement.dataset.index = index;

            todoElement.addEventListener('click', () => displayTodoDetails(todo, lists));

            todoContainer.append(todoElement);
    });

    const addTodo = document.createElement('div');
    addTodo.classList.add('todo');
    addTodo.textContent = "+";
    addTodo.addEventListener('click', () => openTodoDialog(list, lists));

    todoContainer.append(addTodo);
}

export function displayTodoDetails(todo, lists) {
    const detailsContainer = document.querySelector(".live-screen");
    detailsContainer.innerHTML = `
        <h2>${todo.title}</h2>
        <p><strong>Description:</strong> ${todo.description}</p>
        <p><strong>Due Date:</strong> ${todo.dueDate}</p>
        <p><strong>Priority:</strong> ${todo.priority}</p>
    `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Todo";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
            deleteTodo(todo, lists);
    });

    detailsContainer.appendChild(deleteButton);
}

export function deleteTodo(todo, lists) {
    for (let list of lists) {
        const todoIndex = list.todos.indexOf(todo);
        if (todoIndex !== -1) {
            list.todos.splice(todoIndex, 1);
            renderTodos(list, lists); 
        }
    }
}