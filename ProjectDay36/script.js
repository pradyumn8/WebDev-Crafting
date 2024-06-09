const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');

btnElement.onclick = function() {
    const yourName = prompt("Please Enter Your Name: ");
    if(yourName === null || yourName.trim() === "") {
        alert('Please Enter a Name')
    }else {
        spanElement.textContent = yourName;
    }
}