import {
    indexOf
} from 'lodash';
import DOMManip from './DOMManip.js';
import TaskList from './ListObject.js';
import Task from './TaskObject.js';

const LOCAL_STORAGE_KEY = 'lists';

const StorageAPI = (() => {

    /*
        Takes an individual List object and checks to make sure it's valid and there isn't a matching list
        already made by the user.

        @param {list} The ListObject (built from utils/ListObject.js) to be added to storage.
    */
    function addList(list) {
        let lists = StorageAPI.getLocalStorageLists();
        console.log(lists);
        let listObj = TaskList(list, []);
        if (lists !== null && listObj !== null) {
            lists.forEach(l => {
                if (l.category === listObj.category) {
                    alert('You have already made a list under this category!');
                    return;
                }
            });
            lists.push(listObj);
            saveToLocalStorage(lists);
        } else {
            console.log('function addList() was passed null value');
        }
    }

    /* 
        Checks for existing list, and updates it if it exists. 

        @param {list} updated list to be passed on to storage.
    */
    function updateList(list) {
        let lists = getLocalStorageLists();
        if (list.category !== null) {
            lists = lists.map(l => {
                if (l.category === list.category) {
                    console.log('Conditionals passed.');
                    console.log({
                        l
                    });
                    console.log({
                        list
                    });
                    l = list;
                    return l;
                }
            });
        }
        console.log(lists);
        saveToLocalStorage(lists);
    }

    // TODO: Update to handle refactoring of codebase (removal of lists array in this file)
    function removeList(listName) {
        if (lists.length > 0) {
            lists.forEach(element => {
                if (element.category === listName) {
                    lists.splice(indexOf(element), 1);
                }
            });
            return;
        }
        console.log('no list in given listName variable: ' + list);
    }

    function removeTaskFromList(task) {
        let lists = StorageAPI.getLocalStorageLists();

        lists.forEach(list => {
            if (list.category === task.category) {
                console.log('Logging list in removeTaskFromList: ');
                console.log({
                    list
                });

                let newTaskList = list.tasks.filter(t => {
                    console.log(t.text);     
                    console.log(task.text);
                    if(t.text !== task.text) {
                        console.log('Text matches.');
                        return t;
                    }
                });

                list.tasks = newTaskList;
            }
        });
        saveToLocalStorage(lists);
    }

    function deleteAllTasksFromList(lists, category) {
        let lLists = lists;
        lLists.forEach(list => {
            if (list.category === category) {
                list.tasks = [];
                saveToLocalStorage(lLists);
            }
        });
    }

    function deleteAllLists() {
        localStorage.setItem(LOCAL_STORAGE_KEY, null);
    }

    function getLocalStorageLists() {
        let storedLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedLists != null) {
            return storedLists;
        }
        return null;
    }

    function saveToLocalStorage(lists) {
        console.log('Saving lists: ');
        console.log({
            lists
        });
        if (lists.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists));
        } else console.log('lists length was 0 or an incorrect value');
    }

    function requestCategoriesList() {
        let categories = [];
        lists.forEach(li => {
            categories.push(li.category);
        });
        return categories;
    }

    function requestTasksDueToday() {
        // TODO:
    }

    function requestTasksDueWithinAWeek() {
        // TODO:
    }

    function requestAllTasksNoCategory() {
        // TODO:
    }

    function requestOverdueTasks() {
        // TODO:
    }


    return {
        addList,
        removeList,
        removeTaskFromList,
        deleteAllTasksFromList,
        deleteAllLists,
        getLocalStorageLists,
        updateList,
        saveToLocalStorage,
        requestCategoriesList
    }
})();

export default StorageAPI;