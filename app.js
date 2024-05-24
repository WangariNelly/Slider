const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.nextBtn');
const prevButton = document.querySelector('.prevBtn');

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}`;
});

let countStart = 0;

nextButton.addEventListener('click', () => {
    countStart++
    displayPage();
});

prevButton.addEventListener('click', () => {
    countStart--;
    displayPage();
})
if (countStart < slides.length - 1){
    nextButton.style.display = "block";
} else {
    nextButton.style.display = "none"
}

if (countStart > slides.length - 1){
    prevButton.style.display = "block";
} else {
    prevButton.style.display = "none"
}

function displayPage(){
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

prevButton.style.display = "none";