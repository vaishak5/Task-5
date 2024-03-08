function numbers() {
   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;
   var num3 = document.getElementById("num3").value;
   if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert("Please enter numbers in the field.");
      return;
   }
   if (isNaN(num1) === '' || isNaN(num2) === '' || isNaN(num3) === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   num1 = parseInt(num1);
   num2 = parseInt(num2);
   num3 = parseInt(num3);

   var sum = num1 + num2 + num3;
   var avg = sum / 3;

   document.getElementById("sum").innerHTML = "The sum is: " + sum;
   document.getElementById("avg").innerHTML = "The Average is: " + avg.toFixed(2);
}