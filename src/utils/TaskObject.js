function Task(text, category, due) {
    let creation = Date.now();
    let description = '';

    const getCreationDate = () => {
        return creation;
    }

    return {
        text,
        category,
        due,
        description,
        getCreationDate
    };

}

export default Task;