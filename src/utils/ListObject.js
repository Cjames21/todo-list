

const TaskList = (listCat, listTasks) => {

    let tasks = [];
    if (listTasks.length > 0) {
        tasks = listTasks;
    }

    function getTasks() {
        return tasks;
    }

    let category = '';
    if (listCat !== null) {
        category = listCat;
    }    

    function getCategory() {
        return category;
    }

    /* 
        Removes a selected task from tasks array with a given index.

        @param {number} taskIndex - Index of task to be deleted
    */
    function removeTaskFromList(taskIndex) {
        if (taskIndex !== null && taskIndex > -1) {
            tasks.splice(taskIndex, 1);
        }
    }

    // TODO: figure out how to remove items at different points in an array
    function removeMultipleTasks(indexArray) {
        if (indexArray !== null) {
            indexArray.forEach(index => {
                if (index > -1) {
                    
                }
            });
        }
    }

    return {
        removeTaskFromList,
        tasks,
        category
    }
}

export default TaskList;