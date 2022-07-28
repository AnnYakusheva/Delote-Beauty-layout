const burgerButton  = document.getElementById('header__burger');
const burgerMenu = document.getElementById('burger')
const burgerClose = document.getElementById('burger__close')

console.log(burgerMenu)

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('display-block');
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('display-block')
})