
const HAMBURGER = document.querySelector('.hamburger');
const MENU_LIST = document.querySelector('.menu__lists');
const LOGO = document.querySelector('.header__logo');
const OVERLAY = document.querySelector('.overlay');
const FOOTER = document.querySelector('.footer');

HAMBURGER.addEventListener('click', () => {
    HAMBURGER.classList.toggle('hamburger__rotate--active');
    MENU_LIST.classList.toggle('menu__lists--active');
    LOGO.classList.toggle('header__logo--active');
    OVERLAY.classList.toggle('overlay--active');
    document.body.style.overflow = 'hidden';

});

function hideMenu() {
document.addEventListener('click', (event) => {
    if (!event.target.closest('.hamburger__rotate--active')) {
            MENU_LIST.classList.remove('menu__lists--active');
            LOGO.classList.remove('header__logo--active');
            HAMBURGER.classList.remove('hamburger__rotate--active');
            OVERLAY.classList.remove('.overlay--active');
            document.body.style.overflow = 'visible';
        }
    });
}

hideMenu();
