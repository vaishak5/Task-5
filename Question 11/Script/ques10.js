function calculate() {

   var num = document.getElementById("num").value;


   if (isNaN(num) || num <= 0 || num === '') {
      alert("Please enter a valid  number ");
      return;
   }

   num = parseInt(num);
   if ((num % 4 == 0 && num % 100 !== 0) || (num % 400 == 0)) {


      document.getElementById("result").innerHTML = "Leap year";

   } else {
      document.getElementById("result").innerHTML = "Non-leap year";
   }
}