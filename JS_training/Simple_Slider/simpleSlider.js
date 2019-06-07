document.getElementById("slider-left").onclick = sliderLeft;
var left = 0;
function sliderLeft() {
  var polosa = document.getElementById('polosa');
  left = left - 50;
  if (left < 515) {
    left = 0;
  }
  polosa.style.left = -left +"px";
}
