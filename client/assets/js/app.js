const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav-ul');
const logo = document.querySelector('.logo');
const theCard = document.querySelector('.flip-card');
const flipToBack= document.querySelector('#flipToBack');
const flipToFront = document.querySelector('#flipToFront');

const slides = document.getElementsByClassName('carousel-item');
const prevButton = document.querySelector('#carousel-button-prev');
const nextButton = document.querySelector('#carousel-button-next');
let slidePosition = 0;
const totalSlides = slides.length;

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

prevButton.addEventListener('click' , moveToPrevSlide)
nextButton.addEventListener('click' , moveToNextSlide)

function hideAllSlides(){
    for(let slide of slides){
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide(){
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

}

function moveToPrevSlide(){
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

}
