const callButton = document.querySelector('.btn');
const theCard = document.querySelector('.flip-card');
const flipToBack= document.querySelector('#flipToBack');
const flipToFront = document.querySelector('#flipToFront');
const slides = document.getElementsByClassName('carousel-item');
const prevButton = document.querySelector('#carousel-button-prev');
const nextButton = document.querySelector('#carousel-button-next');
let slidePosition = 0;
const totalSlides = slides.length;

callButton.addEventListener('click' , () => {
    callButton.textContent = "1 (510) 763-1368"
})

flipToBack.addEventListener('click', () => {
    theCard.style.transform = "rotateY(180deg)"
})

flipToFront.addEventListener('click' , () => {
    theCard.style.transform = "rotateY(0)"
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
