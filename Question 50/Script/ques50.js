function selectOperation() {
   var operation = document.getElementById('select').value;

   if (operation === '') {
      alert("Please enter values");
      return;
   }
   operation = parseInt(operation);
   if (operation >= 1 && operation <= 4) {
      document.getElementById('inputFields').style.display = 'block';
   } else if (operation == 5) {
      document.getElementById('result').innerHTML = "Exit!!!...";
   } else {
      document.getElementById('result').innerHTML = "Invalid operation!";
   }
}

function performOperation() {
   var num1 = document.getElementById('num1').value.trim();
   var num2 = document.getElementById('num2').value.trim();
   if (num1 === '' || isNaN(num1) || num2 === '' || isNaN(num2)) {
      alert("Please enter a valid numeric value");
      return;
   }

   num1 = parseFloat(num1);
   num2 = parseFloat(num2);

   var operation = parseInt(document.getElementById('select').value);
   var result;

   switch (operation) {
      case 1:
         result = num1 + num2;
         break;
      case 2:
         result = num1 - num2;
         break;
      case 3:
         result = num1 * num2;
         break;
      case 4:
         if (num2 === 0) {
            result = "Cannot divide by zero";
         } else {
            result = num1 / num2;
         }
         break;
      default:
         result = "Invalid operation";
   }

   document.getElementById('result').innerHTML = "Result: " + result;
}