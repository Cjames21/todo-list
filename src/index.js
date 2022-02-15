import projectsAPI from './Backend/projects/JSON_API/projects_API.js';
import firstLoad from "./DOM/utils/firstLoad.js";
import projectsPage from './DOM/projects/projects-view/projectsView.js';
import openedProject from './DOM/projectPage/objectives/projectPage.js';
import clrScreen from './DOM/utils/clearScreen';


import './index.css';

let projectList = projectsAPI.getProjectList();

firstLoad(projectList);

const indexModule = (() => {
    console.log(projectList);

    const renderProjectListPage = () =>  {
        clrScreen();
        projectsPage(projectList);
    }

    const renderProject = (project) => {
        clrScreen();
        openedProject(title);
    }

    const getProjectFromList = (title) => {
        projectList.forEach((project)  => {
            if(project.getProjectTitle == title) {
                return project;
            } else {
                console.log("Err: not finding a project with that title: " + title);
            }
        })
    }

    return {
        renderProjectListPage,
        renderProject,
        getProjectFromList
    }
})();

export default indexModule;