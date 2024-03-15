function calculateSimpleInterest() {
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var time = document.getElementById("time").value;

   if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert("Please enter valid numeric values.");
      return;
   }
   if (isNaN(principal) === '' || isNaN(rate) === '' || isNaN(time) === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   principal = parseInt(principal);
   rate = parseInt(rate);
   time = parseInt(time);


   var simpleInterest = (principal * rate * time) / 100;

   document.getElementById("result").innerHTML = "Simple Interest is: " + simpleInterest.toFixed(2);
}