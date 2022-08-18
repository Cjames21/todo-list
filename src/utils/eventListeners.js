import TaskObject from './TaskObject.js';



const AddEventListeners = () => {




    // Event listener for adding a new task to current list
    let taskInput = document.getElementById('input');
    taskInput.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            





            /* let mInput = document.getElementById('input');
            if (mInput.value.length === undefined || mInput.value.length <= 2) {
                alert("Please enter in sufficient information.");
                return;
            }
            let newTask = TaskObject(mInput.value, currentList, '11/11/31');
            mInput.value = '';
            addTaskToListDOM(newTask);
    
            // Update this list in storage
            lists.forEach(li => {
                if (li.category === newTask.category) {
                    console.log(li);
                    li.tasks.push(newTask);
                    StorageAPI.updateList(li);
                }
            }); */
        }
    });
}

export default AddEventListeners;

