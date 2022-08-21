import './taskList.css';
import TaskObject from '../../utils/TaskObject.js';
import ListObject from '../../utils/ListObject.js';
import TaskItem from '../taskItem/taskItem.js';
import DOMManip from '../../utils/DOMManip.js';
import StorageAPI from '../../utils/storageUtils.js';

/* 
    A set of components used in creating the primary Task List.
*/

// This should be initialized prooperly whenever a TaskListContainer is created
let lListItem = null;

 /* 
    TaskListContainer is the parent component to all other components, 
    and is what will be exported by default.

    @param {ListObject} taskList
  */ 
function TaskListContainer(taskList) {

    
    if (taskList != null) {
        lListItem = taskList;
        const container = document.createElement('div');
        container.className = "content-panel";

        container.appendChild(InputAddTask());

        container.appendChild(populateList(lListItem));

        return container;
    }
    console.log('TaskListContainer function was passed a null value');
}


/* 
    Component used to get user input and provide multiple ways of entering said 
    information through clicking the button, or just hitting enter. Information
    should then be added 
*/
function InputAddTask() {
    const containerInput = document.createElement('div');
    containerInput.className = 'input-container';

    const input = document.createElement('input');
    input.type = "text";
    input.id = 'input';
    input.addEventListener('keydown', (e) => {
        if(e.key == 'Enter') {
            addTaskToList();
        }
    });
    containerInput.appendChild(input);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add("input-submit", "hover-pointer");
    btnSubmit.id = 'btn-submit';
    const arrowSymbol = document.createElement('i');
    arrowSymbol.classList.add("ri-arrow-up-line", "hover-pointer");
    btnSubmit.appendChild(arrowSymbol);
    
    btnSubmit.addEventListener('click', addTaskToList);
    containerInput.appendChild(btnSubmit);

    return containerInput;
}

/* 

*/
function populateList() {
    const listContainer = document.createElement('div');
    listContainer.id = 'list-container';
    listContainer.className = 'list-container';

    if (lListItem !== null && lListItem.tasks.length > 0) {
        lListItem.tasks.forEach(task => {
            listContainer.appendChild(TaskItem(task));
        });
    }

    return listContainer;
}

// Subroutine for task input event listeners.
function addTaskToList() {
    let mInput = document.getElementById('input');
    if (mInput.value.length === undefined || mInput.value.length <= 2) {
        alert("Please enter in sufficient information.");
        return;
    }

    let newTask = TaskObject(mInput.value, lListItem.category, '11/11/31');
    mInput.value = '';
    DOMManip.addTaskToListDOM(newTask);

    // Update this list in storage
    lListItem.tasks.push(newTask);

    StorageAPI.updateList(lListItem);
}

export {
    TaskListContainer
};