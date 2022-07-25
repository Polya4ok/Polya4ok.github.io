const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu__list');
const body = document.querySelector('.body');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('--active');
    nav.classList.toggle('--active');
    body.classList.toggle('.lock');
})