var radio = document.getElementsByName('prim');

for (var i = 0; i<radio.length; i++) {
  radio[i].onchange = testRadio;
}
function testRadio() {
  console.log(this.value);
}
document.getElementById('one').onclick = checkRadio;
function checkRadio() {
   m =document.getElementsByName('prim');
   for (var i = 0; i<m.length; i++) {
     if (m[i].checked) {
       console.log(m[i].value);
       break;
     }
   }
}
