
let menuDiv = document.querySelector(".menu-div");
let menuClose = document.querySelector(".menu-close");
let nav = document.querySelector(".nav");

menuDiv.addEventListener("click",function(){
    menuDiv.style.display = "none"
    menuClose.style.display = "block"
    nav.style.display = "block";
});
menuClose.addEventListener("click",function(){
    menuClose.style.display = "none"
    menuDiv.style.display = "block"
    nav.style.display = "none";
});

// ################

let dot = document.getElementById("dot");


console.log(dot);

console.log(screen.width);

// #################

// let two = document.querySelector(".two");
// let divSvg = document.querySelector(".div-svg");
// let svg = document.querySelector(".svg");
