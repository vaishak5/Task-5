function checkPerfect() {
   var num = document.getElementById('number').value;

   if (isNaN(num.trim()) || num.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   if (num <= 0) {
      alert("Please enter a positive integer.");
      return;
   }
   num = parseInt(num);
   var sum = 0;
   for (var i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
         sum += i;
      }
   }

   if (sum === num) {
      document.getElementById('result').innerHTML = num + " is a perfect number.";
   } else {
      document.getElementById('result').innerHTML = num + " is not a perfect number.";
   }
}