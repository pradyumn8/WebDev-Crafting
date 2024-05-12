const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.getElementById('button');
const searchIcon = document.querySelector(".fa-search");
const crossIcon = document.querySelector(".fa-times");

button.addEventListener("click", () => {
    container.classList.toggle("active");
    container.classList.toggle("active")

    if(container.classList.toggle("active")){
        searchIcon.style.opacity = 0;
        crossIcon.style.opacity = 1;
    } else {
        searchIcon.style.opacity = 1;
        crossIcon.style.opacity = 0;    
    }
})