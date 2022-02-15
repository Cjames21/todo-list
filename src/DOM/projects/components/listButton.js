import indexModule from '../../../index.js';

import "./listButton.css";

const listButton = (text) => {
    let button = document.createElement('div');
    button.className = 'list-panel';
    let buttonTextEl = document.createElement('p');
    buttonTextEl.className = 'panel-text';
    buttonTextEl.textContent = text;
    button.appendChild(buttonTextEl);
    button.addEventListener("click", (e) => {
        // TODO
        // Open the project page associated with project selected
        indexModule.renderProject(text);
    })
    return button;
}

export default listButton;