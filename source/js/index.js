let buttonNav = document.querySelector('main-header__button-nav');
let navNode = document.querySelector('main-header__nav');

console.log(buttonNav);

// if (buttonNav) {
    buttonNav.addEventListener('click', function () {
        console.log(клик);
        navNode.classList.toggle('main-header__nav--close');
    });
// }

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
    spaceBetween: 30,
});
