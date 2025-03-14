import {renderTodos} from "../todo/todoManager.js"

export function renderLists(lists) {
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = "";
    
    lists.forEach((list, index) => {
            const listElement = document.createElement('div');
            listElement.classList.add('list');
            listElement.textContent = list.name;
            listElement.dataset.index = index;
            listElement.addEventListener('click', () => renderTodos(lists[index], lists));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.classList.add('delete-list-button');
            deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            deleteList(index, lists);
            });
            
            listElement.appendChild(deleteButton);
            listContainer.append(listElement);
    });

    const addList = document.createElement('div');
    addList.classList.add('list');
    addList.textContent = "+";
    addList.addEventListener('click', () => openListDialog(lists));

    listContainer.append(addList);
}

export function deleteList(index, lists) {
    lists.splice(index, 1);
    
    renderLists(lists);
}