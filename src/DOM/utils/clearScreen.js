// Clears Dom aside from navbar.

const clrScreen = () => {
    let content = document.getElementById('content');
    let children = content.childNodes;

    if(children.length !== 0) {
        children.forEach((el) => {
            console.log(el);
            if(el.id !== "navBarCont") {
                el.remove();
            }
        })
    }    
}

export default clrScreen;