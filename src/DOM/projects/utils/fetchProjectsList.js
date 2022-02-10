import projectListAPI from '../../../Backend/projects/JSON_API/projects_API.js';
import {getProjList} from '../../../Backend/projects/retrieveProjFromAPI.js';

const fetchProjects = () => {
    // list validation/JSON unpacking eventually
    let API_MODULE = projectListAPI();
    let projList = API_MODULE.getProjectList();
    return projList;
}

export default fetchProjects;