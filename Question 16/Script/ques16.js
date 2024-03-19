function findSmallestAndLargest() {
   var num1 = document.getElementById('num1').value;
   var num2 = document.getElementById('num2').value;
   var num3 = document.getElementById('num3').value;

   if (num1.trim() === '' || num2.trim() === '' || num3.trim() === '' || isNaN(num1.trim()) || isNaN(num2.trim()) || isNaN(num3.trim())) {
      alert("Please enter valid numeric values");
      return;
   }


   var smallest = num1;
   var largest = num1;

   if (num2 < smallest) {
      smallest = num2;
   } else if (num2 > largest) {
      largest = num2;
   }

   if (num3 < smallest) {
      smallest = num3;
   } else if (num3 > largest) {
      largest = num3;
   }

   document.getElementById('result').innerHTML = "Smallest number: " + smallest + "\nLargest number: " + largest;
}