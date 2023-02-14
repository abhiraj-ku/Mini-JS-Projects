const button = document.querySelector('.news');
const popup = document.querySelector('.popup-container');
const closeIcon =document.querySelector('.close-icon');
const overLay =document.querySelector('.overlay');

button.addEventListener("click",()=>{
    popup.classList.add('popup-open')
})
closeIcon.addEventListener("click",()=>{
    popup.classList.remove('popup-open')
})
overLay.addEventListener("click",()=>{
    popup.classList.remove('popup-open')
})