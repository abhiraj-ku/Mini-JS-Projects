const btElem = document.querySelector(".btn");
btElem.addEventListener("mouseover", (event) => {
    const x = event.pageX - btElem.offsetLeft;
    const y = event.pageY - btElem.offsetTop;
    btElem.style.setProperty("--xPos", x + "px")
    btElem.style.setProperty("--yPos", y + "px")

})
