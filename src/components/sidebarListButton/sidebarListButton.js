import DOMManip from "../../utils/DOMManip";
import StorageAPI from "../../utils/storageUtils";

import './sidebarListButton.css';


const sidebarListButton = (text) => {

    let listButton = document.createElement('div');
    listButton.classList = 'list-button';
    
    let button = document.createElement('p');
    button.classList = 'hover-underline';
    button.textContent = text;
    button.addEventListener('click', (e) => {
        console.log(e.target);
        // Change to selected list
        DOMManip.refreshPage(e.target.textContent);
    });
    listButton.appendChild(button);

    let btnDeleteList = document.createElement('i');
    btnDeleteList.classList = 'ri-delete-bin-line'
    btnDeleteList.addEventListener('click', (e) => {
        StorageAPI.removeList(e.target.parentElement.firstChild.textContent);
        DOMManip.refreshPage(e.target.parentElement.parentElement.firstChild.textContent);
    });
    listButton.appendChild(btnDeleteList);

    
    

    return listButton;
}


export default sidebarListButton;