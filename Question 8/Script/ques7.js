function operators() {
   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;

   if (isNaN(num1) || isNaN(num2) || isNaN(num1) === '' || isNaN(num2) === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);
   var sum = num1 + num2;
   var sub = num1 - num2;
   var mul = num1 * num2;
   var div = num1 / num2;

   document.getElementById("sum").innerHTML = "The Sum is: " + sum.toFixed(2);
   document.getElementById("sub").innerHTML = "The Subtraction is: " + sub.toFixed(2);
   document.getElementById("mul").innerHTML = "The Multiplication is: " + mul.toFixed(2);
   document.getElementById("div").innerHTML = "The Division is: " + div.toFixed(2);
}