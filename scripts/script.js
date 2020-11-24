// JavaScript Document
var burgerBTN = document.querySelector("nav .burger");
var expand = document.querySelector("nav .expand");

console.log(burgerBTN);

burgerBTN.addEventListener("click", function() {
  for (var i = 0; i < burgerBTN.querySelectorAll("span").length; i++) {
    burgerBTN.querySelectorAll("span")[i].classList.toggle("clicked");
  }
  expand.classList.toggle("clicked");
})
