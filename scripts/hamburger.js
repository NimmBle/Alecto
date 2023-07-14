const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav__links')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlinks.classList.toggle('hidden')
} )