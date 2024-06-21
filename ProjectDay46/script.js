const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const items = document.querySelectorAll('.item');

const slidesWith = slides[0].clientWidth;
let index = 0;

function updateSlideIndex(offset) {
    index += offset;
    if(index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
}

function updateslides() {
    slidesContainer.style.transition = 'all 0.3s ease-in-out';
    slidesContainer.style.transform = `translateX(${-slidesWith * (index + 1)}px)`;
}

function setActiveItem() {
    items.forEach((item) => item.classList.remove('active'));
    items[index].classList.add('active');
}

function moveToNextSlide() {
    updateSlideIndex(1);
    updateslides();
    setActiveItem();
}

function moveToPrevSlide() {
    updateSlideIndex(-1);
    updateslides();
    setActiveItem();
}

function handleItemClick(i) {
    index = i;
    setActiveItem();
    updateslides();
}

items.forEach((item,i) => item.addEventListener("click", () => handleItemClick(i)));

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

slidesContainer.insertAdjacentHTML('afterbegin', slides[slides.length - 1].outerHTML);
slidesContainer.insertAdjacentHTML('beforeend', slides[0].outerHTML);
slidesContainer.style.transform = `translateX(${-slidesWith}px)`;

setActiveItem();