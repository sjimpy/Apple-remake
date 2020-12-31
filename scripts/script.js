// met dit stuk code maak ik de mobile nav zichtbaar onCLick.
var burgerBTN = document.querySelector("nav .burger");
var expand = document.querySelector("nav .expand");

burgerBTN.addEventListener("click", function() {
  for (var i = 0; i < burgerBTN.querySelectorAll("span").length; i++) {
    burgerBTN.querySelectorAll("span")[i].classList.toggle("clicked");
  }
  expand.classList.toggle("clicked");
})



// met dit stuk code maak ik de ingeklapte elementen zichtbaar.
var footerh3 = document.querySelector("footer").querySelectorAll("h3");
for (var i = 0; i < footerh3.length; i++) {
  footerh3[i].addEventListener("click", function() {
    if (this.classList.contains("active")) {
      this.nextSibling.nextSibling.style.display = "none";
    }else {
      this.nextSibling.nextSibling.style.display = "block";
    }
    this.classList.toggle("active");
  })
}



// met dit stuk code activeer je de easteregg wanneer je snel genoeg "windows" hebt getypt
var ingetypt = "";
var resetingetyptchecker;

document.addEventListener('keydown', function (event) {
  ingetypt = ingetypt += event.key;
  clearTimeout(resetingetyptchecker);
  resetingetyptchecker = setTimeout(resetingetypt, 1000);
  if (ingetypt == "windows") {
    document.querySelectorAll(".jobs")[0].style.animation = "showjobs 1s forwards";
    setTimeout(function () {
      document.querySelector(".laser").style.animation = "laser 1s 4 linear";
    }, 1000);
    setTimeout(function () {
      document.querySelectorAll(".jobs")[0].style.animation = "hidejobs 1s forwards";
      document.querySelector(".laser").style.animation = "none";
    }, 5000);
  }
});
function resetingetypt() {
  ingetypt = "";
}












var animate = document.getElementsByClassName('animate');

elementInViewportChecker();
window.addEventListener("scroll", elementInViewportChecker);

function elementInViewportChecker() {
  for (var i = 0; i < animate.length; i++) {
    if (isInViewport(animate[i]) ? true : false) {
      animate[i].style.opacity = "1";
      animate[i].style.transform = "translateY(0)";
    }
  }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.top.innerHeight/1.3 || document.documentElement.clientHeight/1.9) &&
        rect.top >= -10
    );
}
