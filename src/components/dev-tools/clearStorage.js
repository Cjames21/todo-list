import './clearStorage.css';

import StorageAPI from '../../utils/storageUtils.js';
import DOMManip from '../../utils/DOMManip';

const buttonDeleteStorage = () => {
    let btnContainer = document.createElement('div');
    btnContainer.className = 'hover-pointer btn-delete-lists';
    btnContainer.addEventListener('click', deleteStorage);
    btnContainer.textContent = 'Delete Storage';

    function deleteStorage() {
        console.log('deleting storage')
        StorageAPI.deleteAllLists();
        DOMManip.refreshPage();
    }
    

    return btnContainer;
}   


export default buttonDeleteStorage;
