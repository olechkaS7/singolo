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


/* клик на экран айфона */

document.getElementById('btn-phone-vertical-screen')
  .addEventListener('click', phoneButtonClickHandler);
document.getElementById('btn-phone-horizontal-screen')
  .addEventListener('click', phoneButtonClickHandler);
document.getElementById('btn-phones-vertical-screen')
  .addEventListener('click', phoneButtonClickHandler);

function phoneButtonClickHandler(event) {
  const screenId = event.target.id.substring(4);
  const screen = document.getElementById(screenId);

  if (screen.classList.contains('phone-screen--visible')) {
    screen.classList.remove('phone-screen--visible');
    screen.classList.add('phone-screen--hidden');
  } else if (screen.classList.contains('phone-screen--hidden')) {
    screen.classList.remove('phone-screen--hidden');
    screen.classList.add('phone-screen--visible');
  }
}


// ____переключение меню_____________

function menuClickHandler(event) {
    if (event.target.tagName !== 'A') return;

    MENU.querySelectorAll('li > a').forEach(element => {
        element.classList.remove('header__link--active');
    });
    event.target.classList.add('header__link--active');
}

MENU.addEventListener('click', menuClickHandler);

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll('body > section');
  const links = document.querySelectorAll('#menu a');
  const headerHeight = document.querySelector('header').offsetHeight;

  sections.forEach(section => {
    if (((section.offsetTop - headerHeight - 200) <= curPos)
      && ((section.offsetTop + section.offsetHeight - headerHeight - 200) > curPos)) {
      links.forEach((link) => {
        link.classList.remove('header__link--active');
         if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('header__link--active');
        }
      });
    }
  });
}

/*___________________slider__________*/

const items = document.querySelectorAll('.slider-block__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  changeBackground(items[currentItem]);

	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function changeBackground(slide) {
  const backgroundClassName = slide.id;
  const SLIDER_SECTION = document.querySelector('#slider');
    SLIDER_SECTION.className = 'slider';
    SLIDER_SECTION.classList.add(backgroundClassName);
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('#slider__left-button').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('#slider__right-button').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

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
  document.querySelector('#form').reset();
});

FORM.addEventListener('submit', formSubmitHandler);