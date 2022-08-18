import _ from 'lodash';
import './index.css';
import StorageAPI from './utils/storageUtils.js';
import TaskObject from './utils/TaskObject.js';
import ListObject from './utils/ListObject.js';
import DOMManip from './utils/DOMManip.js';


let currentList = 'DEFAULT';
let lists = StorageAPI.getLocalStorageLists();
console.log(lists);

let content = document.getElementById('content-container');
let sidebar = document.getElementById('sidebar');



if (lists === null || lists === undefined || lists.length === 0) {
    DOMManip.initPageNoLists();
} else {
    lists.forEach(list => {
        if (list !== null) {
            if (list.category === currentList) {
                DOMManip.initPageListsExist(list);
            }
        } else {
            lists = DOMManip.initPageNoLists();
            StorageAPI.saveToLocalStorage(lists);
        }
    });
}




// Event listener for adding a new task to current list
let taskInput = document.getElementById('input');
if(taskInput !== null) {
    taskInput.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            let mInput = document.getElementById('input');
            if (mInput.value.length === undefined || mInput.value.length <= 2) {
                alert("Please enter in sufficient information.");
                return;
            }
    
            let newTask = TaskObject(mInput.value, currentList, '11/11/31');
            mInput.value = '';
            DOMManip.addTaskToListDOM(newTask);
    
            // Update this list in storage
            lists.forEach(li => {
                if (li.category === newTask.category) {
                    li.tasks.push(newTask);
                }
            });

            StorageAPI.saveToLocalStorage(lists);
        }
    });
}
