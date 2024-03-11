function findFirstAndLastDigits() {
   var number = document.getElementById('numberInput').value;

   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


   var numberString = number.toString();


   var firstDigit = numberString.charAt(0);
   var lastDigit = numberString.charAt(numberString.length - 1);


   document.getElementById('output').innerHTML = 'First Digit is : ' + firstDigit + '<br>' +
      'Last Digit is : ' + lastDigit;
}