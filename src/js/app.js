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
if (menuLink.length > 0) {
  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      html.classList.remove('menu-open')
    })
  });
}


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
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  breakpoints: {
    // 420: {
    //   slidesPerView: 3,
    //   spaceBetween: 25,
    //   slideToClickedSlide: true,
    //   initialSlide: 1,
    // },
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
const swiperProduct = new Swiper('.swiper-product', {
  speed: 800,
  spaceBetween: 15,
  slidesPerView: 2,
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl:'.product__slider-button-next',
    prevEl: '.product__slider-button-prev',
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  // autoHeight: true,
  breakpoints: {
    // 420: {
    //   slidesPerView: 3,
    //   spaceBetween: 25,
    //   slideToClickedSlide: true,
    //   initialSlide: 1,
    // },
    
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