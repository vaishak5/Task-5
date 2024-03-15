function findFactorial() {

   var number = document.getElementById('numberInput').value;

   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


   var factorial = 1;
   for (var i = 1; i <= number; i++) {
      factorial = factorial * i;
   }


   document.getElementById('output').innerHTML = 'Factorial of ' + number + ': ' + factorial;
}