const menuBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('nav .links')

menuBtn.addEventListener('click',(e)=>{
    menu.classList.add('appear')
    e.target.classList.add('hidden')
    closeBtn.classList.remove('hidden')
})

closeBtn.addEventListener('click',(e)=>{
    menu.classList.remove('appear')
    e.target.classList.add('hidden')
    menuBtn.classList.remove('hidden')
})
