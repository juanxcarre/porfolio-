let iconoMenu = document.querySelector('.burger')
let menu = document.querySelector('.menu ul')

iconoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
})