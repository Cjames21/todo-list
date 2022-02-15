import fetchProjects from "./fetchProjectsList.js";
import clrScreen from '../../utils/clearScreen.js';
import addProjModal from '../addListModal/addListModal.js';
import listButton from '../components/listButton.js';

const renderProjList = (projList) => {
    let mProjectList = projList;
    clrScreen();
    if(mProjectList.length != 0) {    
        let mContent =  document.getElementById('content');
        let mProjCont = document.createElement('div');
        mProjCont.className = "proj-cont";
        mProjCont.setAttribute("id", "proj-container");
    
        
        mProjectList.forEach(proj => {
            let newBtn = listButton(proj.getProjectTitle());
            mProjCont.appendChild(newBtn);        
        })
    
        mContent.appendChild(mProjCont);
        let mNewProjBtn = listButton("+");
        mNewProjBtn.addEventListener('click', () => {
            let content = document.getElementById('content');
            content.appendChild(addProjModal());
        })
        mProjCont.appendChild(mNewProjBtn);

        mContent.appendChild(mProjCont);
    } else {
        let mContent =  document.getElementById('content');
        let mProjCont = document.createElement('div');
        mProjCont.className = "proj-cont";
        mProjCont.setAttribute("id", "proj-container");

        let mNewProjBtn = listButton("+");
        mNewProjBtn.addEventListener('click', () => {
            let content = document.getElementById('content');
            content.appendChild(addProjModal());
        })
        mProjCont.appendChild(mNewProjBtn);

        mContent.appendChild(mProjCont);
    }    
}

export default renderProjList;