let button = document.querySelector("button");
const body = document.body;


const intervalId = setInterval(() => {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    
    let rgb = `rgb(${red},${green},${blue})`
    
    body.style.backgroundColor = rgb;
}, 1000);
    

button.addEventListener("click" , ()=>{
    clearInterval(intervalId);
    button.textContent =  body.style.backgroundColor;
    
})

button.addEventListener("dblclick" , ()=>{
    setInterval(() => {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        
        let rgb = `rgb(${red},${green},${blue})`
        
        body.style.backgroundColor = rgb;
    }, 1000);
    
    
})




