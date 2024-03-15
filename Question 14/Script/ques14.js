function calculateSum() {
   var number = document.getElementById("number").value;
   var sum = 0;

   if (isNaN(number) || number <= 0 || isNaN(number) === '') {
      alert("Please enter numeric fields");
      return;
   }
   number = parseInt(number);

   var digits = number.toString();

   for (var i = 0; i < digits.length; i++) {

      sum = sum + parseInt(digits[i]);
   }

   document.getElementById('result').innerHTML = "Sum of digits:" + sum;
}