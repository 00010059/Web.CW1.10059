//grabbing the buttons and dropdown content
var btn = document.querySelector(".drpdwn-btn");
var content = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var content6 = document.getElementById("content6");
var btn2 = document.getElementById("general");
var btn3 = document.getElementById("accomodation");
var btn4 = document.getElementById("executive");
var btn5 = document.getElementById("dean");
var btn6 = document.getElementById("account");

//adding eventlistener, when button is clicked, it toggles between two classess
btn.addEventListener("click", function() {
    content.classList.toggle("block");
})
btn2.addEventListener("click", function() {
    content2.classList.toggle("block");
})
btn3.addEventListener("click", function() {
    content3.classList.toggle("block");
})
btn4.addEventListener("click", function() {
    content4.classList.toggle("block");
})
btn5.addEventListener("click", function() {
    content5.classList.toggle("block");
})
btn6.addEventListener("click", function() {
    content6.classList.toggle("block");
})
