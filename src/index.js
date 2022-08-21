import _ from 'lodash';
import './index.css';
import StorageAPI from './utils/storageUtils.js';
import DOMManip from './utils/DOMManip.js';


let currentList = 'DEFAULT';
let lists = StorageAPI.getLocalStorageLists();

DOMManip.initPage(lists, currentList);

let btnAddList = document.getElementById('addNewList');
btnAddList.addEventListener('click', () => {
    DOMManip.enableNewListInput();
    let input = document.getElementById('new-list-input').focus();
});

let sidebarListsContainer = document.getElementById('lists-list').children;
for(let i = 0; i < sidebarListsContainer.length; i++) {
    sidebarListsContainer[i].addEventListener('click', DOMManip.refreshList(currentList));
}









