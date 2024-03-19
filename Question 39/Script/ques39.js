function calculateSumOfEven() {
   var n = parseInt(document.getElementById('number').value);
   if (isNaN(n) || n < 0) {
      alert("Please enter a valid number.");
      return;
   }

   var sum = 0;
   for (var i = 0; i <= n; i += 2) {
      sum += i;
   }

   document.getElementById('result').innerHTML = "Sum of even numbers is: " + sum;
}