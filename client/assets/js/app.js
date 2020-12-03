const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav-ul');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click' , () => {
    navUL.classList.toggle('show')
})

logo.addEventListener('click' , () => {
    window.location.href="../../index.html"
})