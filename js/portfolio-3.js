let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-minus');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-minus');
    navbar.classList.remove('active');
}

let typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Android Developer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
});