// JavaScript Document
var burgerBTN = document.querySelector("nav .burger");
var expand = document.querySelector("nav .expand");

burgerBTN.addEventListener("click", function() {
  for (var i = 0; i < burgerBTN.querySelectorAll("span").length; i++) {
    burgerBTN.querySelectorAll("span")[i].classList.toggle("clicked");
  }
  expand.classList.toggle("clicked");
})







// var footerh3 = document.querySelector("footer");
var footerh3 = document.querySelector("footer").querySelectorAll("h3");
console.log(footerh3);

for (var i = 0; i < footerh3.length; i++) {
  footerh3[i].addEventListener("click", function() {
    console.log(this.nextSibling.nextSibling);
    this.nextSibling.nextSibling.style.display = "block"
    // this.querySelector("span").toggle
    console.log(this.querySelector("span"));
  })
}
