import "./styles.css";

import {loadUI, renderLists, renderTodos} from "./modules/dom.js";
import {createTodo} from "./modules/todo.js";
import {createList} from "./modules/list.js";

document.addEventListener("DOMContentLoaded", () => {
    loadUI();
})