const task = (title, desc, dateCreated, dueDate) => {

    let mTitle = title;
    let mDesc = desc;
    let mDateCreated = dateCreated;
    let mDueDate = dueDate;

    const editTitle = (newTitle) => {
        mTitle = newTitle;
    }

    const editDesc = (newDesc) => {
        mDesc = newDesc;
    }

    const editDueDate = (newDate) => {
        mDueDate = newDate;
    } 
}

export default task;