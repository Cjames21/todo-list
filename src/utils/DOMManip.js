import {
    TaskListContainer
} from '../components/taskList/taskList.js';
import TaskItem from '../components/taskItem/taskItem.js';
import ListObject from './ListObject.js';
import TaskObject from './TaskObject.js';
import TaskDetails from '../components/taskDetails/taskDetails.js';
import DeleteStorage from '../components/dev-tools/clearStorage.js';


/*
    
*/
const DOMManip = (() => {

    let content = document.getElementById('content-container');
    let sidebar = document.getElementById('sidebar');

    const initPageListsExist = (list) => {
        console.log('lists exist');
        content.appendChild(TaskListContainer(list));
    }

    const initPageNoLists = () => {
        console.log('no lists');
        let currentList = 'DEFAULT';
        let lists = [];
        let taskList = [];
        taskList.push(TaskObject('Add a new task', currentList, '11/11/31'));
        lists.push(ListObject(currentList, taskList));

        content.appendChild(TaskListContainer(lists[0]));
        console.log('Default tasak list initialized: ');
        console.log({lists});
        return lists;
    }


    const addTaskToListDOM = (task) => {
        // save task to task list throuh storageAPI, then update current list

        let taskElement = TaskItem(task);

        let taskList = document.getElementById('list-container');
        taskList.appendChild(taskElement);
    }

    /* 
    Removes all HTML from the list-container and nullifies lListItem.
    Useful for other parts of the app to call when switching lists, or 
    deleting a list.
    */
    const clearListDOM = () => {
        let listContainer = document.getElementById('list-container');
        listContainer.innerHTML = ('');
        lListItem = null;
    }

    return {
        initPageListsExist,
        initPageNoLists,
        clearListDOM,
        addTaskToListDOM
    }

})();

export default DOMManip;