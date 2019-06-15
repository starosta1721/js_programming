document.getElementById('slide').onmousemove = function (event) {
  var x = event.offsetX; //relative parent
  document.getElementById('two').style.width = x + "px";
}
document.getElementById('slide').onmouseleave = function (event) {
    document.getElementById('two').style.width ="375px";
}
