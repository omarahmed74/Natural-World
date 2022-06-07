let menuBtn = document.querySelector('.menu-btn')
let navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click' , () => {
    navlinks.classList.toggle('mobile-menu')
})