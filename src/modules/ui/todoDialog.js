import { createTodo } from "../todo/todo.js";
import {renderTodos} from "../todo/todoManager.js"

export function initTodoDialog() {
    let currentList = null;
            let currentLists = null;
        
            const dialog = document.getElementById("todo-dialog");
            const cancelBtn = document.getElementById("cancel-todo");
            const form = document.getElementById("todo-form");
        
            function openTodoDialog(list, lists) {
                currentList = list;
                currentLists = lists;
        
                dialog.showModal();
            }
        
            cancelBtn.addEventListener("click", () => {
                dialog.close();
            });
        
            form.addEventListener("submit", (event) => {
                event.preventDefault();
                const title = document.getElementById("todo-title").value;
                const description = document.getElementById("todo-description").value;
                const dueDate = document.getElementById("todo-dueDate").value;
                const priority = document.getElementById("todo-priority").value;
        
                if (currentList && currentLists) {
                    const newTodo = createTodo(title, description, dueDate, priority);
                    currentList.addTodo(newTodo);
                    renderTodos(currentList, currentLists);
                }
        
                dialog.close();
                form.reset();
            });
        
            window.openTodoDialog = openTodoDialog;
}