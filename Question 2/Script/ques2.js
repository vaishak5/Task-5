function addNumbers() {

   var num1 = document.getElementById("num1").value.trim();
   var num2 = document.getElementById("num2").value.trim();


   if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   num1 = parseInt(num1);
   num2 = parseInt(num2);

   var sum = num1 + num2;
   document.getElementById("sum").innerHTML = "The sum is: " + sum;

}