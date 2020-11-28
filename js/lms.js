//grabbing buttons, modal screens and close buttons
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var span1 = document.getElementById("close-modal1");
var span2 = document.getElementById("close-modal2");
var span3 = document.getElementById("close-modal3");
var span4 = document.getElementById("close-modal4");
var span5 = document.getElementById("close-modal5");
var span6 = document.getElementById("close-modal6");

//adding eventlistener click for all button to open modal
btn1.addEventListener("click", function() {
    modal.style.display = "block";
}) 
btn2.addEventListener("click", function() {
    modal2.style.display = "block";
}) 
btn3.addEventListener("click", function() {
    modal3.style.display = "block";
}) 
btn4.addEventListener("click", function() {
    modal4.style.display = "block";
}) 
btn5.addEventListener("click", function() {
    modal5.style.display = "block";
}) 
btn6.addEventListener("click", function() {
    modal6.style.display = "block";
}) 

//adding eventlistener to close buttons to close modal
span1.addEventListener("click", function() {
    modal.style.display = "none";
}) 
span2.addEventListener("click", function() {
    modal2.style.display = "none";
})
span3.addEventListener("click", function() {
    modal3.style.display = "none";
}) 
span4.addEventListener("click", function() {
    modal4.style.display = "none";
})
 span5.addEventListener("click", function() {
    modal5.style.display = "none";
})
 span6.addEventListener("click", function() {
    modal6.style.display = "none";
}) 

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
