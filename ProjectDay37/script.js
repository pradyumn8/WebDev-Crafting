const switchBtn = document.querySelector('.switch'); // Selects the first element with class 'switch'
const body = document.body;

if (switchBtn) { // Check if the element exists
    switchBtn.addEventListener("click", () => {
        body.classList.toggle('on');
    });
}
