let slider = document.getElementById("slider");
let back = document.getElementById("back");
let next = document.getElementById("next");

let array = ["pic-1.jpg" , "pic-2.jpg" , "pic-3.jpg" , "pic-4.jpg"];

let i = 0;

next.onclick = function(){
    if(i<3){
        slider.src = array[i+1];
        i++;
    }   
}

back.onclick = function(){
    if(i>0){
        slider.src = array[i-1];
        i--;
    }   
}