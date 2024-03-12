function printFibonacci() {
   var limit = parseInt(document.getElementById("limit").value);

   if (isNaN(limit) || limit < 0) {
      alert("Please enter a valid positive number!");
      return;
   }

   var fibonacciSeries = [0, 1];

   for (var i = 2; i <= limit; i++) {
      var nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];

      fibonacciSeries.push(nextFibonacci);
   }
   document.getElementById("result").innerHTML = "Fibonacci Series: " + fibonacciSeries.join(", ");
}