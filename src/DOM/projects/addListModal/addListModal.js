import {addProj} from '../../../Logic/listManip/retrieveProjFromAPI.js'

import './addListModal.css';

const addListModal = () => {
    let mBlackoutContainer = document.createElement('div');
    mBlackoutContainer.className = "blackout-container";
    mBlackoutContainer.setAttribute("id", "blackoutContainer");


    let mModalCont = document.createElement('div');
    mModalCont.className = "modal-cont";
    mModalCont.setAttribute("id", "add-list-modal");

    let mPrompt = createElement('p');
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
        let t = document.getElementById('projTitle');
        let tString = t.textContent;
        console.log(tString)
        // addProj(tString);
        // TODO: Finish component
        // Clear modal
        // Rerender list, need to flesh out the modules.
    })

    mModalCont.appendChild(mSubmitBtn);
    mBlackoutContainer.appendChild(mModalCont);
    
    return mBlackoutContainer;
}

export default addListModal;