import {
    TaskListContainer
} from '../components/taskList/taskList.js';
import TaskItem from '../components/taskItem/taskItem.js';
import NewListInput from '../components/newList/newList.js';
import sidebarListButton from '../components/sidebarListButton/sidebarListButton.js';
import ListObject from './ListObject.js';
import TaskObject from './TaskObject.js';
import TaskDetails from '../components/taskDetails/taskDetails.js';
import DeleteStorage from '../components/dev-tools/clearStorage.js';
import StorageAPI from './storageUtils.js';


/*
    
*/
const DOMManip = (() => {

    let content = document.getElementById('content-container');

    const initPageListsExist = (list) => {
        content.appendChild(TaskListContainer(list));
    }

    const initPageNoLists = () => {
        let currentList = 'DEFAULT';
        let lists = [];
        let taskList = [];
        taskList.push(TaskObject('Add a new task', currentList, '11/11/31'));
        lists.push(ListObject(currentList, taskList));

        content.appendChild(TaskListContainer(lists[0]));
        return lists;
    }

    const initPage = (lists, currentList) => {
        content.innerHTML = '';
        let listTitle = document.createElement('h1');
        listTitle.classList = 'list-header';
        listTitle.textContent = currentList;
        content.appendChild(listTitle);



        if (lists === null || lists === undefined || lists.length === 0) {
            lists = initPageNoLists();
            StorageAPI.saveToLocalStorage(lists);
        } else {
            lists.forEach(list => {
                if (list !== null) {
                    if (list.category === currentList) {
                        initPageListsExist(list);
                    }
                } else {
                    lists = initPageNoLists();
                    StorageAPI.saveToLocalStorage(lists);
                }
            });
        }

        let sidebarLists = document.getElementById('lists-list');
        sidebarLists.innerHTML = '';
        lists.forEach(list => {
            addListToSidebar(list.category);
        });
        sidebarLists.appendChild(DeleteStorage());
    }

    const refreshPage = (category) => {
        content.textContent = '';
        let lists = StorageAPI.getLocalStorageLists();

        let sidebarLists = document.getElementById('lists-list');
        while (sidebarLists.innerHTML !== '') {
            sidebarLists.innerHTML = '';
        }

        initPage(lists, category);

    }

    const refreshList = (category) => {
        let lists = StorageAPI.getLocalStorageLists();
        let li = null;

        lists.forEach(l => {
            if (l.category === category) {
                li = l;
            }
        });

        if (li !== null) {
            let lContainer = document.getElementById('list-container');
            lContainer.textContent = '';
            li.tasks.forEach(task => {
                addTaskToListDOM(task);
            })
        }
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
    }

    const enableNewListInput = () => {
        let listsList = document.getElementById('lists-list');
        if (listsList !== null && listsList.lastChild.id !== 'new-list-input') {
            listsList.appendChild(NewListInput());
        }
    }

    const disableNewListInput = () => {
        let listsList = document.getElementById('lists-list');
        listsList.removeChild(listsList.lastChild);
    }

    const addListToSidebar = (category) => {
        let sidebarLists = document.getElementById('lists-list');
        sidebarLists.appendChild(sidebarListButton(category));
    }

    return {
        initPage,
        refreshPage,
        refreshList,
        clearListDOM,
        addTaskToListDOM,
        enableNewListInput,
        disableNewListInput,
        addListToSidebar
    }

})();

export default DOMManip;