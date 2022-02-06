// Check this bitchin API interface \m/__|>.<|___\m/

let projectList = [
    ];

const getProjList = () => {
    return projectList;
}

const addProj = (proj) => {
    list.push(proj);
}

const removeProj = (index) => {
    list.splice(index, 1);
}

export {getProjList, addProj, removeProj};