let buttonNav = document.querySelector('.main-header__button-nav');
let navNode = document.querySelector('.main-header__nav');

buttonNav.addEventListener('click', function () {
    console.log(клик);
    navNode.classList.toggle('main-header__nav--close');
    // if (navNode.classList.contains('main-header__nav--close'))
});