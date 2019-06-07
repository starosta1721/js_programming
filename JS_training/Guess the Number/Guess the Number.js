function g() {
  var num, programmNum, res;
  //generate number between 1-10
  programmNum = Math.floor((Math.random() * 10) + 1)
  num = document.getElementById('num').value;
  res = document.getElementById('res');

  if (programmNum == num) {
    res.innerHTML = "You are guess";
  } else if (num > programmNum) {
    res.innerHTML = "Your number is greater";
  } else {
    res.innerHTML = "Your number is less";
  }
}
