function addNumbers() {

   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;


   if (isNaN(num1) || isNaN(num2) || isNaN(num1) === '' || isNaN(num2) === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   num1 = parseInt(num1);
   num2 = parseInt(num2);

   var sum = num1 + num2;
   document.getElementById("sum").innerHTML = "The sum is: " + sum;

}