function printEvenNumbers() {
   var n = document.getElementById("limit").value;


   if (isNaN(n.trim()) || n.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   n = parseInt(n);
   var result = "";

   for (var i = 1; i <= n; i++) {
      if (i % 2 == 0) {
         result += i + " ";
      }
   }

   document.getElementById("output").innerHTML = "Even numbers:" + result;
}