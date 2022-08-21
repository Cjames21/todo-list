import DOMManip from '../../utils/DOMManip';
import StorageAPI from '../../utils/storageUtils';
import './newList.css';


/* 
    Input component used for creating a new list. 
*/
const NewListInput = () => {
    let inputContainer = document.createElement('div');
    inputContainer.className = 'new-list-input';
    inputContainer.id = 'new-list-input';

    let input = document.createElement('input');
    input.type = 'text';
    inputContainer.appendChild(input);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            enterUserInput();
        } else {
            console.log('Something went wrong');
        }
    })

    let btnConfirmInput = document.createElement('i');
    btnConfirmInput.className = 'ri-check-line confirm-input';
    inputContainer.appendChild(btnConfirmInput);
    btnConfirmInput.addEventListener('click', enterUserInput);

    let btnCanelInput = document.createElement('i');
    btnCanelInput.classList = ['ri-close-line cancel-input'];
    inputContainer.appendChild(btnCanelInput);
    btnCanelInput.addEventListener('click', DOMManip.disableNewListInput);

    function enterUserInput() {
        // TODO: add list to storage, switch dom to show new list
        if(input.value !== null & input.value.length > 3) {
            StorageAPI.addList(input.value);
            DOMManip.addListToSidebar();
            DOMManip.disableNewListInput();
        } else {
            console.log('Input value did not pass logic checks: ' + input.value);
        }
        
    }

    return inputContainer;
}

export default NewListInput;