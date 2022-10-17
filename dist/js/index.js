let buttonNav = document.querySelector('main-header__button-nav');
let navNode = document.querySelector('main-header__nav');

if (buttonNav) {
    buttonNav.addEventListener('click', function () {
        console.log(клик);

        navNode.classList.toggle('main-header__nav--close');
    });
}
