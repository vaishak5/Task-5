function calculateCompoundInterest() {
   var principal = document.getElementById("principal").value.trim();
   var rate = document.getElementById("rate").value.trim();
   var time = document.getElementById("time").value.trim();
   var frequency = document.getElementById("frequency").value.trim();

   if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(frequency)) {
      alert("Please enter valid numeric values.");
      return;
   }

   if (principal === '' || rate === '' || time === '' || frequency === '') {
      alert("Please enter numbers in the field.");
      return;
   }
   principal = parseInt(principal);
   rate = parseInt(rate);
   time = parseInt(time);
   frequency = parseInt(frequency);


   var compoundInterest = principal * Math.pow(1 + rate / (frequency * 100), frequency * time) - principal;

   document.getElementById("result").innerHTML = "Compound Interest: " + compoundInterest.toFixed(2);
}