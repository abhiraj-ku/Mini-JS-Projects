<<<<<<< HEAD
const textElement = document.getElementById("textarea");
const totalCounter= document.getElementById("total-counter");
const remainCounter= document.getElementById("remaining-counter");
textElement.addEventListener("keyup",()=>{
    textElement.style.color = "aqua";
    textElement.style.fontFamily="cursive";
    updateCounter(); 
    isRemoved();
    zeroRemaining();
})

updateCounter();

function updateCounter() {
   totalCounter.innerText=textElement.value.length;
   remainCounter.innerText=textElement.getAttribute("maxlength")-totalCounter.innerText; 
}
function isRemoved(){
    if(textElement.value.length==0){
        alert("The Total Counter is zero now , Start typing again");
        textElement.removeAttribute("style")
    }
}
function zeroRemaining() {
    if (remainCounter.innerText==0) {
        document.querySelector("h2").innerHTML="You have no remaining characters 💀" ;
    }
}



    



=======
const btElem = document.querySelector(".btn");
btElem.addEventListener("mouseover", (event) => {
    const x = event.pageX - btElem.offsetLeft;
    const y = event.pageY - btElem.offsetTop;
    btElem.style.setProperty("--xPos", x + "px")
    btElem.style.setProperty("--yPos", y + "px")

})
>>>>>>> c9c2434e8f0d388fa9c4280a0933fdde1ab1a73b
