var block = document.getElementById('one');
//mouse click
block.onclick = function () {
  this.style.background = "blue";

}
//double click
block.ondblclick = function () {
  this.style.background = "yellow";
}

//right mousebutton onclick
block.oncontextmenu = function () {
  this.style.background = "grey";
  return false;
}
//mouse on element
block.onmouseenter = function() {
  alert("Mouse over");
}

//mouse get off the element
block.onmouseleave = function() {
  alert("Mouse leave");
}
//mouse moving inside the block
var p = 0;
block.onmousemove = function() {
  p++;
  this.style.width = 1000 + p + "px";
}
