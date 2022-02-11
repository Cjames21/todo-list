import projectListAPI from '../../../Backend/projects/JSON_API/projects_API.js';

const fetchProjects = () => {
    // list validation/JSON unpacking eventually
    let projList = projectListAPI.getProjectList();
    return projList;
}

export default fetchProjects;