const projectModel = (title) => {
    let projectTitle = title;
    let objectiveList = [];

    const getProjectTitle = () => projectTitle;

    const setProjectTitle = (newTitle) => projectTitle = newTitle;

    const getObjectiveList = () => objectiveList;

    const addObjective = (objective) => objectiveList.push(objective);

    const editObjective = (editedObjective) => {
        // nothing yet
    }    

    const removeObjective = (index) => {
        if(objectiveList.length > index) {
            objectiveList.splice(index, 1);
        } else {
            console.log("projectModel.js line 23: Error referencing element out of bounds");
        }
    } 

    return {
        getProjectTitle,
        setProjectTitle,
        getObjectiveList,
        addObjective,
        editObjective,
        removeObjective
    }
}

export default projectModel;