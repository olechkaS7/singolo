const MENU = document.getElementById('menu');
const SLIDER = document.getElementById('slider');
//const SLIDER_LEFT = document.getElementById('slider__left');
//const SLIDER_RIGHT = document.getElementById('slider__right');

function menuClickHandler(event) {
    if (event.target.tagName !== 'A') return;

    MENU.querySelectorAll('ul > li > a').forEach(element => {
        element.classList.remove('header__link--active');
    });

    event.target.classList.add('header__link--active');
}

MENU.addEventListener('click', menuClickHandler);

console.log(SLIDER);
console.dir(SLIDER);

