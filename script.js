
const image = document.querySelector(".image-box");

var btn1 = document.querySelector("#prev");
var btn2 = document.querySelector("#next");
let x = 0;
btn1.addEventListener("click", function(){
    x = x + 45;
    image.style.transform = `perspective(1000px) rotateY(${x}deg)`;
});

btn2.addEventListener("click", function(){
    x = x - 45;
    image.style.transform = `perspective(1000px) rotateY(${x}deg)`;
});
