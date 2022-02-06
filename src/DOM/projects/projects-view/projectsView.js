import listButton from '../components/listButton.js';
import fetchProjects from '../../utils/fetchProjectsList.js';


import './projectsView.css'

let projectsView = () => {

    let mProjectList = fetchProjects();
    console.log(mProjectList);


    let mContent =  document.getElementById('content');
    let mProjCont = document.createElement('div');
    mProjCont.className = "proj-cont";

    
    mProjectList.forEach(proj => {
        console.log(proj);
        let projName = proj.projName;
        let newBtn = listButton(projName);
        mProjCont.appendChild(newBtn);        
    })

    let mNewProjBtn = listButton("+");
    mNewProjBtn.addEventListener('click', () => {
        let content = document.getElementById('content');
        content.appendChild(addProjModal());
    })
    mProjCont.appendChild(mNewProjBtn);

    mContent.appendChild(mProjCont);
}

export default projectsView;
