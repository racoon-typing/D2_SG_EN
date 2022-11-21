// Меню
let buttonNav = document.querySelector('.main-header__button-nav');
let navNode = document.querySelector('.main-header__nav');
let itemNavNode = document.querySelectorAll('.main-header__item');

if (buttonNav) {
    buttonNav.addEventListener('click', function () {
        navNode.classList.toggle('main-header__nav--close');
        navNode.classList.toggle('main-header__nav--open');

        if (navNode.classList.contains('main-header__nav--open')) {
            buttonNav.classList.remove('main-header__button-nav');
            buttonNav.classList.add('main-header__button-nav--cross');
        } else {
            buttonNav.classList.add('main-header__button-nav');
            buttonNav.classList.remove('main-header__button-nav--cross');
        }
    });
}

if (itemNavNode) {
    for (let i = 0; i < itemNavNode.length; i++) {
        itemNavNode[i].addEventListener('click', function () {
            navNode.classList.remove('main-header__nav--open');
            navNode.classList.add('main-header__nav--close');
            buttonNav.classList.remove('main-header__button-nav--cross');
            buttonNav.classList.add('main-header__button-nav');
        })
    }
}


// Скрывает меню при прокрутке на Планшете
function callbackHide() {
    if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1200) {
        console.log(document.documentElement.clientWidth);

        var lastScrollTop = 0;
        window.addEventListener('scroll', (event) => {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                navNode.classList.add('main-header__nav--tablet-down');
            } else {
                // upscroll code
                navNode.classList.remove('main-header__nav--tablet-down');
            }
            lastScrollTop = st;
        });
    }
}


window.addEventListener("load", callbackHide);

// Купить 
let buttonBuy = document.querySelector('.main-header__button-buy');
let buttonBuyProduct = document.querySelector('.product__link');
let buttonFormClose = document.querySelector('.popup-form__wrapper-button');
let popupForm = document.querySelector('.popup-form');
let pageBody = document.querySelector('.page__body');

function openPopupForm() {
    popupForm.classList.remove('popup-form--close');
    pageBody.style.overflow = 'hidden';
};

buttonBuyProduct.addEventListener('click', openPopupForm);
buttonBuy.addEventListener('click', openPopupForm);


buttonFormClose.addEventListener('click', function () {
    popupForm.classList.add('popup-form--close');
    pageBody.style.overflow = 'auto';
});


// Инициализируем слайдер 
new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    // Навигация
    // Булеты, текущее положение
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические булеты
        dynamicBullets: true,
    },
    // Отступ между слайдами
    spaceBetween: 50,
    // Эффект переключения слайдов
    // effect: 'cube',
    // // Дополнение к cube
    // cubeEffect : {
    //     // Настройки тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94 
    // }
});
