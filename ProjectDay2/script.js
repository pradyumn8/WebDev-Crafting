const letters = document.querySelectorAll('.letters span');

letters.forEach((letters)=>{

    letters.addEventListener('click',(e)=>{
        e.target.classList.add('active');
    });
});