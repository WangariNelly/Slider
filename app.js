const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.nextBtn');
const prevButton = document.querySelector('.prevBtn');

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}`;
});

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    currentSlide++
    displayPage();
});

prevButton.addEventListener('click', () => {
    currentSlide--;
    displayPage();
})


function displayPage(){
    // nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
    // prevButton.style.display = currentSlide > 0 ? 'none' : 'block';
    if (currentSlide < slides.length - 1){
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none"
    }
    
    if (currentSlide  >  0){
        prevButton.style.display = "block";
    } else {
        prevButton.style.display = "none"
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    })
}

prevButton.style.display = "none";