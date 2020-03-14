const MENU = document.getElementById('menu');
const SLIDER = document.getElementById('slider');
const TAB = document.getElementById('tab-list');
const PORTFOLIO_IMAGES = document.getElementById('portfolio-images');
const FORM = document.getElementById('form');
const FORM_MODAL = document.getElementById('form-modal');
const MODAL_BUTTON = document.getElementById('modal-button');
const SUBJECT_INPUT = document.getElementById('subject-input');
const DESCRIBE_INPUT = document.getElementById('describe-input');
const MODAL_SUBJECT = document.getElementById('modal-subject');
const MODAL_DESCRIPTION = document.getElementById('modal-description');


/* -------- */

const VERTICAL_SCREEN = document.getElementById('phone-vertical-screen');
const HORIZONTAL_SCREEN = document.getElementById('phone-horizontal-screen');

function phoneScreenClickHandler(event) {
  if (event.target.classList.contains('phone-screen--visible')) {
    event.target.classList.remove('phone-screen--visible');
    event.target.classList.add('phone-screen--hidden');
  } else if (event.target.classList.contains('phone-screen--hidden')) {
    event.target.classList.remove('phone-screen--hidden');
    event.target.classList.add('phone-screen--visible');
  }
}

VERTICAL_SCREEN.addEventListener('click', phoneScreenClickHandler);
HORIZONTAL_SCREEN.addEventListener('click', phoneScreenClickHandler);





/*_________________menu__________________*/

function menuClickHandler(event) {
    if (event.target.tagName !== 'A') return;

    MENU.querySelectorAll('li > a').forEach(element => {
        element.classList.remove('header__link--active');
    });

    event.target.classList.add('header__link--active');
}

MENU.addEventListener('click', menuClickHandler);


/*___________________portfolio-images__________*/

function imagesClickHandler(event) {
  if (event.target.tagName !== 'IMG') return;

  PORTFOLIO_IMAGES.querySelectorAll('div').forEach(elem => {
    elem.classList.remove('portfolio-images__item--active');
  });

  event.target.closest('div').classList.add('portfolio-images__item--active');
}


function tabClickHandler(event) {
  if (event.target.tagName !== 'BUTTON') return;

  TAB.querySelectorAll('button').forEach(element => {
      element.classList.remove('tab--active');
  });

  event.target.classList.add('tab--active');

  const shiftElement0 = PORTFOLIO_IMAGES.querySelectorAll('div')[0];
  const shiftElement1 = PORTFOLIO_IMAGES.querySelectorAll('div')[1];
  const shiftElement2 = PORTFOLIO_IMAGES.querySelectorAll('div')[2];
  PORTFOLIO_IMAGES.append(shiftElement0, shiftElement1, shiftElement2);
}

TAB.addEventListener('click', tabClickHandler);
PORTFOLIO_IMAGES.addEventListener('click', imagesClickHandler);

/*________________form________*/

function formSubmitHandler(event) {
  this.checkValidity();
  event.preventDefault();

  if (SUBJECT_INPUT.value !== '') {
    MODAL_SUBJECT.innerText = `Тема: ${SUBJECT_INPUT.value}`;
  } else {
    MODAL_SUBJECT.innerText = 'Без темы';
  }

  if (DESCRIBE_INPUT.value !== '') {
    MODAL_DESCRIPTION.innerText = `Описание: ${DESCRIBE_INPUT.value}`;
  } else {
    MODAL_DESCRIPTION.innerText = 'Без описания';
  }

  FORM_MODAL.classList.remove('modal--hidden');
  FORM_MODAL.classList.add('modal--visible');
}

MODAL_BUTTON.addEventListener('click', (event) => {
  FORM_MODAL.classList.remove('modal--visible');
  FORM_MODAL.classList.add('modal--hidden');
});

FORM.addEventListener('submit', formSubmitHandler);

// console.log(SLIDER);
// console.dir(SLIDER);

