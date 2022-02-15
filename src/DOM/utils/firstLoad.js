import navBar from '../nav-bar/navBar.js';
import projectsView from '../projects/projects-view/projectsView.js';

const firstLoad = (projectList) => {
    navBar();
    projectsView(projectList);
}

export default firstLoad;

