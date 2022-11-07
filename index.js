const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerclose');
const navMenu = document.querySelector('.navmenu'); 
const container = document.querySelector('.container');


hamburger.addEventListener('click', show);
hamburgerClose.addEventListener('click', close);

function show() {
   navMenu.style.display = 'flex';
};

function close() {
    navMenu.style.display = 'none';
};