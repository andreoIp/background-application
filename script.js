var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("idbody");
var randomButton = document.getElementById("randomButton");

function changeBackground (){
    body.style.background = "linear-gradient(to right," + color1.value + ","+ color2.value + ")";
    css.textContent = body.style.background + ';';
}

function changeBackgroundRandom(){
    var rand1 = Math.floor(Math.random()*16777215).toString(16);
    var rand2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right,#" + rand1 + ",#"+ rand2 + ")";
    css.textContent = body.style.background + ';';
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
randomButton.addEventListener("click", changeBackgroundRandom);
