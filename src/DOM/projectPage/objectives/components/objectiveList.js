import projectsAPI from '../../../../Backend/projects/JSON_API/projects_API.js';

import './objectiveList.css';

const objectiveList = (project) => {

    const objList = project.getObjectiveList();
    if(objList.length !== 0) {
        let listCont = document.createElement('div');
        listCont.className = "obj-list-cont";
        listCont.setAttribute("id", "objListCont");
    
        objList.foreach((el) => {
            let panel = document.createElement('div');
            panel.className = "obj-list-panel";

            let titleBar = document.createElement('div');
            titleBar.className = "obj-title-bar";
            
            
            let titleEl = document.createElement('h3');
            titleEl.textContent = el.getObjectiveTitle();  

            let addTaskBtn = document.createElement('h3');
            addTaskBtn.className = "obj-add-task-btn";
            addTaskBtn.addEventListener("click", () => {
                // TODO: add tasks, need input form
            })

            titleBar.appendChild(titleEl);
            titleBar.appendChild(addTaskBtn);
            panel.appendChild(titleBar);

            // TODO add task list

            listCont.appendChild(panel);
        })

        return listCont;
    } else {
        console.log("objectiveList.js: No objectives in list");
    }

    

}