function calculateSumAndAverage() {
   var n = document.getElementById('number').value;
   if (isNaN(n) || n <= 0) {
      alert("Please enter a valid positive number.");
      return;
   }
   n = parseInt(n);

   var sum = 0;
   for (var i = 1; i <= n; i++) {
      sum += i;
   }

   var average = sum / n;

   document.getElementById('result').innerHTML = "<p>Sum of natural numbers is: " + sum + "</p><p>Average of natural numbers is: " + average + "</p>";
}