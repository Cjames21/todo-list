

const sidebarListButton = (text) => {

    let button = document.createElement('p');
    button.classList = ['hover-underline'];
    button.textContent = text;
    
    button.addEventListener('click', (e) => {
        console.log(e.target);
    })

    return button;
}


export default sidebarListButton;