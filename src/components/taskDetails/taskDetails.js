import StorageAPI from "../../utils/storageUtils";

let category = '';

const TaskDescription = (descText) => {

    let desc = descText;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList = ['desc-cont'];

    const descTextArea = document.createElement('textarea')
    descTextArea.classList = ['desc-text', 'disabled'];


    const descInput = document.createElement('input');
    descInput.setAttribute('placeholder', 'Enter extra details here...');
    descInput.classList = ['desc-text', 'disabled']

    if (desc !== null || desc !== undefined) {
        descTextArea.textContent = desc;
        descTextArea.classList = ['desc-text', 'enabled'];
    } else {
        descInput.classList = ['desc-text', 'enabled'];
    }

    descriptionContainer.appendChild(descTextArea);
    descriptionContainer.appendChild(descInput);

    descTextArea.addEventListener('onclick', () => {
        // Toggle this element with descInput
        descTextArea.classList = ['desc-text', 'disabled'];
        descInput.classList = ['desc-text', 'enabled'];
        descInput.value = desc;
        descInput.focus();
    })

    descInput.addEventListener('keydown', (e) => {
        // Toggle this element with descTextArea
        if(e.key === 'enter') {
            desc = descInput.value;
            descInput.classList = ['desc-text', 'disabled'];
            descTextArea.classList = ['text-area', 'enabled'];
            descTextArea.textContent = desc;
        }        
    })

return descriptionContainer;

}

const dropDownItem = (cat) => {
    const element = document.createElement('p');
    element.textContent = cat;

    return element;
}


// TODO: Fix error: line 68(currentCategory is already defined)
/* const listSelectContainer = (currentCategory) => {
    const container = document.createElement('div');

    const sectionHeader = document.createElement('p');
    sectionHeader.textContent = 'LIST';
    container.appendChild(sectionHeader);

    const listsDropdown = document.createElement('div');
    listsDropdown.classList = ['categoryDropdown', 'visible'];
    let currentCategory = dropDownItem(currentCategory);
    listsDropdown.appendChild(currentCategory);
    container.appendChild(listsDropdown);

    listsDropdown.addEventListener('click', () => {
        // TODO
    });


} */

const TaskDetails = (task) => {
    category = task.category;

    const componentContainer = document.createElement('div');
    componentContainer.classList = ['task-details-container'];

    const taskText = document.createElement('h1');
    taskText.textContent = task.text;
    componentContainer.appendChild(taskText);

    componentContainer.appendChild(TaskDescription(task.description));

}

export {
    TaskDetails
};