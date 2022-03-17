var button = document.querySelector('button');
var input1 = document.getElementById('num1')! as HTMLInputElement;
var input2 = document.getElementById('num2')! as HTMLInputElement;

var add = function (num1: number, num2: number): string {
  var ris = num1 + num2;
  return ris.toString()
};

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});
