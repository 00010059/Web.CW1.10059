//grabbing button and navbar
var btn = document.getElementById("logo");
var screen = document.getElementById("screen");
var nav = document.getElementById("nav");

//adding click event
btn.addEventListener("click", function() {
    nav.classList.toggle("show");
    if(screen.style.display == "block")
    screen.style.display = "none";
    else 
    screen.style.display = "block"
})