import './taskItem.css';

import StorageAPI from '../../utils/storageUtils';


/* 
    Individual TaskItem component that is responsible 
    for creating a DOM element with data passed to it.
*/
function TaskItem(task) {
    const item = document.createElement('div');
    item.className = "task-item";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList = ['task-checkbox'];    
    checkbox.addEventListener('click', (event) => {
        StorageAPI.removeTaskFromList(task);
    })
    item.appendChild(checkbox);

    const taskText = document.createElement('p');
    taskText.className = 'task-text';
    taskText.textContent = task.text;
    item.appendChild(taskText);

    const taskCategory = document.createElement('p');
    taskCategory.className = 'task-category';
    taskCategory.textContent = 'DEFAULT';
    item.appendChild(taskCategory);

    return item;
}



export default TaskItem;