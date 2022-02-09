import "./navBar.css";

const navBar = () => {
    let content = document.getElementById('content');
    let navBarContainer = document.createElement('div');
    navBarContainer.className = "nav-bar-cont";
    navBarContainer.setAttribute("id", "navBarCont");
    navBarContainer.appendChild(navBarLogo());
    content.appendChild(navBarContainer);  

}

const navBarBtn = (text, id) => {
    let btn = document.createElement('div');
    btn.className = "nav-bar-btn";
    btn.textContent = text;
    btn.setAttribute("id", id);

    return btn;
}

const navBarLogo = () => {
    let logo = document.createElement('h1');
    logo.className = "nav-bar-logo";
    logo.textContent = "Todo List";

    return logo;
}

export default navBar;