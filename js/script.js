let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '50px',
    duration: 2550,
    reset: true
});

sr.reveal('.span', {delay:300});
sr.reveal('.h1', {delay:400, origin: 'left'});
sr.reveal('.home-text p', {delay:510,origin: 'right'});
sr.reveal('.icons', {delay:620,origin: 'top'});
sr.reveal('.main-btnn', {delay:720,origin: 'bottom'});
sr.reveal('.home-img', {delay:820,origin: 'right'});
sr.reveal('.social', {delay:920,origin: 'top'});