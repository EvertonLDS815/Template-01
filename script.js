let menuBar = document.getElementById('im-4');
let menuButton = document.getElementById('im-icon');
let pageReturn = document.querySelector('.im-content-return');
let buttonret = document.getElementById('button-return');


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

//animation-button-scroll

// let elem = document.getElementById('perc')
// let doc = document.documentElement

// window.addEventListener('scroll', function() {
//     let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
//     elem = value + 'vw'
//     /* console.log(doc.scrollTop) */

//     if (value < 50) {
//         buttonret.style.visibility = 'hidden';
//         buttonret.style.opacity = '0';
//     } else {
//         buttonret.style.visibility = 'visible';
//         buttonret.style.opacity = '1';
//     }
// })

// const topScroll = () => {
//     window.scrollTo(0, 0);
// }