const body = document.querySelector("body");
const images = ["3.jpg","5.jpg","6.jpg"];

let randomNum = Math.floor(Math.random()*images.length);

body.style.backgroundImage = `url(./img/${images[randomNum]})`;
body.style.backgroundSize = "cover";