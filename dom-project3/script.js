var icon =document.querySelector("#container")
var heart = document.querySelector("i")


icon.addEventListener("dblclick",function(){

    heart.style.transform='translate(-50%,50%) scale(1)'
   heart.style.opacity=0.8;
   
   
   setTimeout(function(){
        heart.style.opacity=0;
    },1000)
    
    setTimeout(function(){
        heart.style.transform='translate(-50%,50%) scale(0)'
    
    },1000)
})
