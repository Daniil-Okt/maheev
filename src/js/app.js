/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
} from './modules';

import BurgerMenu from './modules/BurgerMenu';

// import Tabs from 'modules/Tabs';

import { MousePRLX } from './libs/parallaxMouse'

import AOS from 'aos'

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
AOS.init();

/** Параллакс мышей */
const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();

// =======================================================================================================
// const tabs = new Tabs('default-tabs', {});

/*Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()
// =======================================================================================================

/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================

// скрытие меню
const menuLink = document.querySelectorAll('.menu__item')
const html = document.querySelector('html')
const body = document.querySelector('body')
if (menuLink.length > 0) {
  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      html.classList.remove('menu-open')
      body.classList.remove('lock')
    })
  });
}






//================== таймер
const targetDate = new Date('2023-09-10T24:00:00');
function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Функция для определения правильных окончаний слов
    function getWordEnding(number, one, few, many) {
        number = Math.abs(number);
        const mod10 = number % 10;
        const mod100 = number % 100;

        if (mod10 === 1 && mod100 !== 11) {
            return one;
        } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
            return few;
        } else {
            return many;
        }
    }

    // Функция для форматирования чисел с лидирующим нулем
    function formatWithLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }

    // Обновление текста в соответствии с числами и окончаниями слов
    document.getElementById("days-tens").innerText = Math.floor(days / 10);
    document.getElementById("days-ones").innerText = days % 10;
    document.getElementById("days-label").innerText = getWordEnding(days, 'день', 'дня', 'дней');

    document.getElementById("hours-tens").innerText = Math.floor(hours / 10);
    document.getElementById("hours-ones").innerText = hours % 10;
    document.getElementById("hours-label").innerText = getWordEnding(hours, 'час', 'часа', 'часов');

    document.getElementById("minutes-tens").innerText = Math.floor(minutes / 10);
    document.getElementById("minutes-ones").innerText = minutes % 10;
    document.getElementById("minutes-label").innerText = getWordEnding(minutes, 'минута', 'минуты', 'минут');
}
const timerInterval = setInterval(updateTimer, 1000);



// скрытие рецептов
const recipesItem = document.querySelectorAll('.recipes__item')
const recipesButton = document.querySelector('.recipes__button')
if (recipesItem.length > 0) {
  recipesButton.addEventListener('click', () => {
    recipesItem.forEach(item => {
      if (!item.classList.contains('open')) {
        if (item.classList.contains('_is-open')) {
          item.classList.remove('_is-open')
          recipesButton.textContent = 'Показать еще'
        } else {
          item.classList.add('_is-open')
          recipesButton.textContent = 'Cкрыть'
        }
      }
    });
  })
}



const swiperProduct = new Swiper('.swiper-product', {
  speed: 800,
  spaceBetween: 15,
  slidesPerView: 2,
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl:'.product__slider-button-next',
    prevEl:'.product__slider-button-prev',
  },
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 82,
    }
  }
});
const buttonNextProduct = document.querySelector('.product__slider-button-next')
setInterval(() => {
  buttonNextProduct.click()
}, 2300)
const swiperHistory = new Swiper('.swiper-history', {
  speed: 800,
  spaceBetween: 25,
  slidesPerView: 1,
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl:'.history__slider-button-next',
    prevEl: '.history__slider-button-prev',
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  loop: true,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 64
    }
  }
});



// const iframeBotVideo = document.querySelector('.iframe-bot-video')
// iframeBotVideo.style.height = (parseFloat(iframeBotVideo.style.height) - 245) + 'px';