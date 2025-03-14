import "./styles.css";

import {loadUI} from "./modules/ui/ui.js";
import {renderLists} from "./modules/list/listManager.js"
import {createTodo} from "./modules/todo/todo.js";
import {createList} from "./modules/list/list.js";
import {initTodoDialog} from "./modules/ui/todoDialog.js";
import {initListDialog} from "./modules/ui/listDialog.js";

const lists = [
    createList("Default"),
    createList("Work")
];

const todo1 = createTodo("Buy Groceries", "Milk, Eggs, Bread", "2025-03-05", "High");
const todo2 = createTodo("Study", "Review JavaScript modules", "2025-03-06", "Medium");
const todo3 = createTodo("Meeting with Client", "Prepare slides for presentation", "2025-03-07", "High");
const todo4 = createTodo("Code Review", "Review PRs from teammates", "2025-03-08", "Medium");

lists[0].addTodo(todo1);
lists[0].addTodo(todo2);
lists[1].addTodo(todo3);
lists[1].addTodo(todo4);

document.addEventListener("DOMContentLoaded", () => {
    loadUI();
    renderLists(lists);
    
    initTodoDialog();
    initListDialog();
});
