function sum() {
  var number1, number2, result;
  number1 = document.getElementById('number1').value;
  number1 = parseInt(number1);

  number2 = document.getElementById('number2').value;
  number2 = parseInt(number2);

  result = number1 + number2;
  document.getElementById('result').innerHTML = result;
}
function dif() {
  var number1, number2, result;
  number1 = document.getElementById('number1').value;
  number1 = parseInt(number1);

  number2 = document.getElementById('number2').value;
  number2 = parseInt(number2);

  result = number1 - number2;
  document.getElementById('result').innerHTML = result;
}
function mul() {
  var number1, number2, result;
  number1 = document.getElementById('number1').value;
  number1 = parseInt(number1);

  number2 = document.getElementById('number2').value;
  number2 = parseInt(number2);

  result = number1 * number2;
  document.getElementById('result').innerHTML = result;
}
function div() {
  var number1, number2, result;
  number1 = document.getElementById('number1').value;
  number1 = parseInt(number1);

  number2 = document.getElementById('number2').value;
  number2 = parseInt(number2);

  if (number2 == 0) {
    alert("Incorrect data. Please enter number != 0");
  } else {
    result = number1 / number2;
    document.getElementById('result').innerHTML = result;
  }
}
