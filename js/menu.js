
const burgerMenu = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu')
const hideBtn = document.querySelector('.menu-title img')

burgerMenu.addEventListener('click', ()=>{
  menu.classList.toggle('show')
})

hideBtn.addEventListener('click', ()=>{
  menu.classList.toggle('show')
})