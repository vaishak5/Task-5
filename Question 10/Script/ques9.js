function calculate() {

   var num = document.getElementById("num").value;


   if (isNaN(num) || num <= 0 || num === '') {
      alert("Please enter a valid  number ");
      return;
   }
   num = parseInt(num);

   if (num % 2 == 0) {


      document.getElementById("result").innerHTML = "Even number";

   } else {
      document.getElementById("result").innerHTML = "Odd number";
   }
}