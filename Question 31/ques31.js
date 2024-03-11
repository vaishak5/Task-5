function calculateProduct() {
   var number = document.getElementById("number").value;
   if (isNaN(number.trim()) || number.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   if (number <= 0) {
      alert('Please enter a positive number.');
      return;
   }
   number = parseInt(number);
   var product = 1;


   while (number > 0) {
      var digit = number % 10;
      product *= digit;
      number = Math.floor(number / 10);
   }

   document.getElementById("output").innerHTML = "Product of digits: " + product;
}