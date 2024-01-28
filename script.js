let menuBar = document.getElementById('im-4');
let menuButton = document.getElementById('im-icon');
let pageReturn = document.querySelector('.im-content-return');
let buttonret = document.getElementById('button-return');
const myDate = document.getElementById('date');

const newDate = new Date();
const year = newDate.getFullYear();
myDate.innerHTML = `© ${year} - Todos os Direitos Reservados`;

const transitionMenu = () => {
    if(menuBar.style.width === '200px') {
        menuBar.style.width = '0';
        pageReturn.style.display = 'none';
    } else {
        returnMenu();
    }
}
/* menuButton.addEventListener('click', transitionMenu) */
const returnMenu = () => {
    menuBar.style.width = '200px';
    pageReturn.style.display = 'block';
}
pageReturn.addEventListener('click', transitionMenu)

const buttonReturn = () => {
    window.scrollTo(0, 0);
    console.log(name)
}
