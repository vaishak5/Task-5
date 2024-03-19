
function printNumbersDivisibleBy5And11() {
   var limit = document.getElementById("limit").value.trim();

   if (isNaN(limit) || limit === '' || parseInt(limit) <= 0) {
      alert('Please enter a valid positive number.');
      return;
   }

   limit = parseInt(limit);
   var result = "";
   var count = 0;

   for (var i = 1; count < limit; i++) {
      var num = i * 55; // Multiply by 55 to get multiples of 55
      
      // Check if the number is divisible only by 5 and 11
      if (num % 5 == 0 && num % 11 == 0) {
         result += num + ', ';
         count++;
      }
   }

   if (result === "") {
      alert("There are no numbers satisfying the condition within the given limit.");
      return;
   }
   // Remove the trailing comma and space before displaying the result
   result = result.slice(0, -2);
   document.getElementById("output").innerHTML = "Numbers are: " + result;
}

