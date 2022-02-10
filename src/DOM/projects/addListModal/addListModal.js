import {addProj} from '../../../Backend/projects/retrieveProjFromAPI.js';
import renderProjList from '../utils/renderProjectList.js';

import './addListModal.css';

const addListModal = () => {
    let mBlackoutContainer = document.createElement('div');
    mBlackoutContainer.className = "blackout-container";
    mBlackoutContainer.setAttribute("id", "blackoutContainer");
    mBlackoutContainer.addEventListener('keypress', (e) => {
        if(e.key === 13) {
            submitInput();
        }
    })


    let mModalCont = document.createElement('div');
    mModalCont.className = "modal-cont";
    mModalCont.setAttribute("id", "add-list-modal");

    let mExitBtn = document.createElement('div');
    let x = document.createElement('p');
    x.textContent = "x";
    mExitBtn.appendChild(x);
    mExitBtn.className= "btn-exit-modal";
    mExitBtn.setAttribute("id", "btnExitModal");
    mExitBtn.addEventListener("click", () => {
        clearModal();        
    })
    mModalCont.appendChild(mExitBtn);

    let mPrompt = document.createElement('p');
    mPrompt.textContent = "Please enter your projects title."

    let mInputTitleLabel = document.createElement('label');
    mInputTitleLabel.setAttribute("for", "inputTitle");
    mInputTitleLabel.className = "input-label";
    mInputTitleLabel.textContent = "Title: "
    mModalCont.appendChild(mInputTitleLabel);

    let mInputTitle = document.createElement('input');
    mInputTitle.setAttribute("name", "inputTitle");
    mInputTitle.setAttribute("type", "text");
    mInputTitle.setAttribute("id", "projTitle");
    mInputTitle.className = "input-entry";
    mModalCont.appendChild(mInputTitle);

    let mSubmitBtn = document.createElement('div');
    mSubmitBtn.className = "modal-submit-btn";
    mSubmitBtn.setAttribute("id", "modalAddProjToList");
    mSubmitBtn.textContent = "Submit";
    mSubmitBtn.addEventListener("click", () => {
        submitInput();
    })

    mModalCont.appendChild(mSubmitBtn);
    mBlackoutContainer.appendChild(mModalCont);
    
    return mBlackoutContainer;
}

function clearModal() {
    let el = document.getElementById('content');
    let children = el.childNodes;
    children.forEach((element) => {
        if(element.id === "blackoutContainer") {
            let input = document.getElementById('projTitle');
            input.textContent = "";
            element.remove();
        }
    })
}

function submitInput() {
    let t = document.getElementById('projTitle');
    let tString = t.value;
    addProj(tString);
    clearModal();
    renderProjList();
}


// TODO when modal is opened, set focus to the input field
// TODO add event listener for 'enter' key pressed to screen when modal is opened to activate the  submit button functionality

export default addListModal;