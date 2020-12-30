// met dit stuk code maak ik de kleur van de macbooks aanpasbaar
var color = document.getElementsByClassName('color');
var changingImg;

for (var i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function() {
    if (this.classList.contains("v2")) {
      changingImg = document.getElementsByClassName("changingmac")[1];
    }
    else {
      changingImg = document.getElementsByClassName("changingmac")[0];
    }
    
    if (this.classList.contains("color1")) {
      changingImg.src = "../images/macgray.jpg";
    }
    else if (this.classList.contains("color2")) {
      changingImg.src = "../images/macgold.jpg";
    }
    else {
      changingImg.src = "../images/macsilver.jpg";
    }
  })
}
