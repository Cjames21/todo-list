import objectiveList from './components/objectiveList.js';

const objectivesPage = (project) => {
    // TODO unpack project object into title, objectivesArr, etc

    let content = document.getElementById('content');
    let objectivesPage = document.createElement('div');
    objectivesPage.className = "obj-page";

    let addObjectiveBtn = document.createElement('div');
    addObjectiveBtn.className = "btn-add-obj";
    addObjectiveBtn.addEventListener('click', () => {
        // TODO create an addObjectiveModal with input form. Once input is submitted, rerender page
    });

    let listCont = objectiveList();

    objectivesPage.appendChild(addObjectiveBtn);
    objectivesPage.appendChild(listCont);

    content.appendChild(objectivesPage);
}

export default objectivesPage;