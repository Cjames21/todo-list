import projectModel from "../models/projectModel.js";
import objectiveModel from '../models/objectiveModel.js';
import taskModel from '../models/taskModel.js';

/*
    Controls all functionality that has to do with managing the user's projects,

    TODO extend functionality
*/


const projects = (() => {
    const projList = [];

    // possibly send a flag letting "front end" know if list is empty or not. 
    const getProjList = () => {
        return projList;
    }

    const addProj = (projTitle) => {
        let project = projectModel(projTitle);
        projList.push(project);
    }

   const removeProj = (index) => {
        if(projList.length > index) {
            projList.splice(index, 1);
        } else {
            console.log("projectStorage.js line:19, error trying to reach out of bounds index.");
        }
    }

    const editProjectTitle = (index, newTitle) => {
        if(projList.length > index) {
            projList[index].setProjectTitle(newTitle);
        } else {
            console.log("projectStorage.js line:27, error trying to reach out of bounds index.");
        }        
    }

    return {
        getProjList,
        addProj,
        removeProj,
        editProjectTitle
    }
})();

export default projects;