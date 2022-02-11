import projectStorage from '../projectStorage/projectStorage.js';


/* Projects overview
    All the functionality to do with getting all projects stored, editing the project list 
    Takes in JSON, maps data to corresponding data, stores, removes, edits requested data.
*/

const projectListAPI = (() => {
    let projList = projectStorage.getProjList();

    const getProjectList = () => {
        return projList;
    }
    
    const addProjectToList = (projectTitle) => {
        console.log("API file line 18 projTitle var: " + projectTitle);
        projectStorage.addProj(projectTitle);
    }
    
    const removeProjectFromList = (index) => {
        projectStorage.removeProj(index);
    }
    
    const editProjTitle = (projectIndex, newTitle) => {
        // TODO: add functionality
    } 
    
    return {
        getProjectList,
        addProjectToList,
        removeProjectFromList,
        editProjTitle
    }
})();

export default projectListAPI;

