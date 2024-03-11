function printNaturalNumbers() {

   var number = document.getElementById('numberInput').value;

   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


   var naturalNumbers = '';
   for (var i = number; i >= 1; i--) {
      naturalNumbers += i ;
   }


   document.getElementById('output').innerHTML = 'Natural Numbers from 1 to ' + number + ': ' + naturalNumbers;
}