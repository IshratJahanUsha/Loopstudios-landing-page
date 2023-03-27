const menuOpenBtn = document.querySelector('.menu_openBtn')
const menuCloseBtn = document.querySelector('.menu_closeBtn')
const navbar = document.querySelector('.navbar')

menuOpenBtn.addEventListener('click',()=>{
    navbar.classList.add('active')
    menuCloseBtn.classList.add('active')
})
menuCloseBtn.addEventListener('click',()=>{
    navbar.classList.remove('active')
    menuCloseBtn.classList.remove('active')
})