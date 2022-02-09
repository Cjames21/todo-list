// Check this bitchin API interface \m/__|>.<|___\m/

let projectList = [
    ];

const getProjList = () => {
    return projectList;
}

const addProj = (proj) => {
    projectList.push(proj);
}

const removeProj = (index) => {
    projectList.splice(index, 1);
}

export {getProjList, addProj, removeProj};