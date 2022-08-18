import './taskList.css';
import TaskItem from '../taskItem/taskItem.js';

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
    containerInput.appendChild(input);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add("input-submit", "hover-pointer");
    const arrowSymbol = document.createElement('i');
    arrowSymbol.classList.add("ri-arrow-up-line", "hover-pointer");
    btnSubmit.appendChild(arrowSymbol);
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

function refreshTaskList(taskList) {
    clearListDOM();
    populateList(taskList);
} 


export {
    TaskListContainer,
};