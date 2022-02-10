const projectModel = (title) => {
    let projectTitle = title;
    let objectiveList = [];

    const getProjectTitle = () => {
        return projectTitle;
    }

    const setProjectTitle = (newTitle) => {
        projectTitle = newTitle;
    }

    const addObjective = (objective) => {
        objectiveList.push(objective);
    }

    const removeObjective = (index) => {
        if(objectiveList.length > index) {
            objectiveList.splice(index, 1);
        } else {
            console.log("projectModel.js line 23: Error referencing element out of bounds");
        }
    } 
}

export default projectModel;