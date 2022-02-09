import {getProjList} from '../../../Logic/listManip/retrieveProjFromAPI.js';

const fetchProjects = () => {
    // list validation/JSON unpacking eventually
    let projList = getProjList();
    return projList;
}

export default fetchProjects;