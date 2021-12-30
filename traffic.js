var red =document.getElementById("red");
var green =document.getElementById("green");
var orange =document.getElementById("orange");

red.addEventListener('click',()=>{
    red.style.backgroundColor="red"
    setTimeout(()=> {
        red.style.backgroundColor = "";
      }, 1000);
})

green.addEventListener('click',()=>{
    green.style.backgroundColor="green"

    setTimeout(()=> {
        green.style.backgroundColor = "";
      }, 1000);

})

orange.addEventListener('click',()=>{
    orange.style.backgroundColor="orange"

    setTimeout(()=> {
        orange.style.backgroundColor = "";
      }, 1000);

})

function reset(){
    
    red.style.backgroundColor=""
    green.style.backgroundColor=""
    orange.style.backgroundColor=""
}