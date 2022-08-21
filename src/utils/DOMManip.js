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
        console.log('lists exist');
        content.appendChild(TaskListContainer(list));
        content.appendChild(DeleteStorage());
    }

    const initPageNoLists = () => {
        console.log('no lists');
        let currentList = 'DEFAULT';
        let lists = [];
        let taskList = [];
        taskList.push(TaskObject('Add a new task', currentList, '11/11/31'));
        lists.push(ListObject(currentList, taskList));

        content.appendChild(TaskListContainer(lists[0]));
        content.appendChild(DeleteStorage());
        console.log('Default tasak list initialized: ');
        console.log({
            lists
        });
        return lists;
    }

    const initPage = (lists, currentList) => {
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
        lists.forEach(list => {
            sidebarLists.appendChild(sidebarListButton(list.category));
        });
    }

    const refreshPage = () => {
        content.textContent='';
        initPage(StorageAPI.getLocalStorageLists(), 'DEFAULT');
    }

    const refreshList = (category) => {
        let lists = StorageAPI.getLocalStorageLists();
        let li = null;
        
        lists.forEach(l => {
            if(l.category === category) {
                li = l;
            }
        });

        if(li !== null) {
            let lContainer = document.getElementById('list-container');
            lContainer.textContent = '';
            li.tasks.forEach(task => {
                addTaskToListDOM(task);
            })
        } else console.log('function refreshList(): Something went wrong assigning value to {li}');
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
        if(listsList !== null && listsList.lastChild.id !== 'new-list-input') {
            listsList.appendChild(NewListInput());
        }        
        console.log(listsList.lastChild);
    }

    const disableNewListInput = () => {
        let listsList = document.getElementById('lists-list');
        listsList.removeChild(listsList.lastChild);
    }

    const addListToSidebar = (category) => {
        let sidebarLists = document.getElementById('lists-list');
        sidebarLists.appendChild(sidebarListButton(category));
    }

    /* const refreshSideBarLists = () => {
        // TODO: get new listsList and add it to the sidebar
        let lists = StorageAPI.getLocalStorageLists();        
        let listsList = document.getElementById('lists-list');
        console.log({listsList});
        console.log({lists});

        while(listsList.lastChild) {
            listsList.removeChild(listsList.lastChild);
        }

        lists.forEach(li => {
            listsList.appendChild(sidebarListButton(li.category));
        });
    } */

    return {
        initPage,
        refreshPage,
        refreshList,
        clearListDOM,
        addTaskToListDOM,
        enableNewListInput,
        disableNewListInput,
        addListToSidebar
        // refreshSideBarLists
    }

})();

export default DOMManip;