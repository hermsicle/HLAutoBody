const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav-ul');
const logo = document.querySelector('.logo');
const theCard = document.querySelector('.flip-card');
const flipToBack= document.querySelector('#flipToBack');
const flipToFront = document.querySelector('#flipToFront');

hamburger.addEventListener('click' , () => {
    navUL.classList.toggle('show')
})

logo.addEventListener('click' , () => {
    window.location.href="../../client/views/index.html"
})

flipToBack.addEventListener('click', () => {
    theCard.style.transform = "rotateY(180deg)"
})

flipToFront.addEventListener('click' , () => {
    theCard.style.transform = "none"
})