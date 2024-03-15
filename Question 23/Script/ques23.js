function findFactors() {

   var number = document.getElementById('numberInput').value;


   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


   var factors = [];
   for (var i = 1; i <= number; i++) {
      if (number % i === 0) {
         factors.push(i);
      }
   }


   document.getElementById('output').innerHTML = 'Factors of ' + number + ': ' + factors.join(', ');
}