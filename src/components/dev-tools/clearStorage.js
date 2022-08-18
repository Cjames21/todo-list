import './clearStorage.css';

import StorageAPI from '../../utils/storageUtils.js';

const buttonDeleteStorage = () => {
    let btnContainer = document.createElement('div');
    btnContainer.className = 'hover-pointer btn-delete-lists';
    btnContainer.addEventListener('onclick', deleteStorage);
    btnContainer.textContent = 'Delete Storage';

    function deleteStorage() {
        console.log('deleting storage')
        StorageAPI.deleteAllLists();
    }
    

    return btnContainer;
}   


export default buttonDeleteStorage;
