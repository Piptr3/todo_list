import "./styles.css";

import {loadUI, renderLists, renderTodos} from "./modules/dom.js";
import {createTodo} from "./modules/todo.js";
import {createList} from "./modules/list.js";

const lists = [createList("Default")];

const todo1 = createTodo("Buy Groceries", "Milk, Eggs, Bread", "2025-03-05", "High");
const todo2 = createTodo("Study", "Review JavaScript modules", "2025-03-06", "Medium");

lists[0].addTodo(todo1);
lists[0].addTodo(todo2);

document.addEventListener("DOMContentLoaded", () => {
    loadUI();
    renderLists(lists);
    renderTodos(lists[0]);
});
