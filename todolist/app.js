let addToDoButton=document.getElementById("addToDo");
let toDoContainer=document.getElementById("toDoContainer");
let inputField=document.getElementById("inputField");

addToDoButton.addEventListener("click",function() {
    var paragraph=document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.style.border="2px solid black";
    // paragraph.style.margin="8px";
    paragraph.style.color="white"
    paragraph.style.fontSize="22px";
    paragraph.style.textTransform="uppercase";
    paragraph.innerHTML=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value=" ";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";

    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);

    })
   
})
function maxLimit() {
    if (paragraph.length==maxLimit) {

        alert("maxLimit exceeded")
        
    }
}
maxLimit();


   