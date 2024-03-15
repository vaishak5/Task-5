function printMultiplicationTable() {
   var number = document.getElementById('numberInput').value;

   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   number = parseInt(number);


   var table = '';
   for (var i = 1; i <= 10; i++) {

      table = table + number + 'x' + i + '=' + (number * i) + '<br>';
   }


   document.getElementById('output').innerHTML = table;
}