function findFirstAndLastDigits() {
   var number = document.getElementById('numberInput').value.trim();

   if (isNaN(number) || number === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


  

	var input = document.getElementById('numberInput').value.trim();
        var output = document.getElementById('output');
   var firstDigit = input.charAt(0);
   var lastDigit = input.charAt(input.length - 1);


   document.getElementById('output').innerHTML = 'First Digit is : ' + firstDigit + '<br>' +
      'Last Digit is : ' + lastDigit;
}
