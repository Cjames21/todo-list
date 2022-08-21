import './taskItem.css';

import StorageAPI from '../../utils/storageUtils';
import DOMManip from '../../utils/DOMManip';


/* 
    Individual TaskItem component that is responsible 
    for creating a DOM element with data passed to it.
*/
function TaskItem(task) {
    const item = document.createElement('div');
    item.className = 'task-item';
    item.id = 'task-item';
    item.addEventListener('click', (e) => {
        // Bring up tasks details panel.
        let t = e.target;
        if (t.className === 'task-category' || t.className === 'task-text') {

        } else if (t.className === 'ri-check-line') {
            return;
        }

        console.log('Open Task Details: ');
        console.log(e);
        console.log(e.target);
    });

    const btnTaskComplete = document.createElement('i');
    btnTaskComplete.classList = ['ri-check-line'];
    btnTaskComplete.addEventListener('click', () => {
        StorageAPI.removeTaskFromList(task);
        DOMManip.refreshList(task.category);
    })
    item.appendChild(btnTaskComplete);

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