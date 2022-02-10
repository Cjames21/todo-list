import task from './taskModel.js';

const objective = (title) => {
    let objTitle = title;
    let tasks = [];

    const getObjectiveTitle = () => {
        return objTitle;
    }

    const editTitle = (newTitle) => {
        objTitle = newTitle;
    }

    const addTask = (taskTitle, desc, date, dueDate) => {
        let taskObj = task(taskTitle, desc, date, dueDate)
        tasks.push(taskObj);
    } 

    const removeTask = (index) => {
        if(tasks.length > index) {
            tasks.splice(index, 1);
        } else {
            console.log("objectiveModel.js line24: Error, referencing out of bounds element in array");
        }
    }
}

export default objective;