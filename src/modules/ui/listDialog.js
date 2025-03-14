import { createList } from "../list/list.js";
import {renderLists} from "../list/listManager.js"

export function initListDialog() {
    let currentLists = null;
        
        const listDialog = document.getElementById("list-dialog");
        const cancelListBtn = document.getElementById("cancel-list");
        const formList = document.getElementById("list-form");

        function openListDialog(lists) {
                currentLists = lists;
                listDialog.showModal();
        }

        cancelListBtn.addEventListener("click", () => {
                listDialog.close();
        });

        formList.addEventListener("submit", (event) => {
                event.preventDefault();
        
                const listName = document.getElementById("list-name").value;
        
                if (listName) {
                const newList = createList(listName);
                currentLists.push(newList); 
        
                renderLists(currentLists); 
                }
        
                listDialog.close(); 
                formList.reset();
        });

        window.openListDialog = openListDialog;
}