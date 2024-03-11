function findNumbersDivisibleBy5And11() {
   var n = document.getElementById("number").value;


   if (isNaN(n.trim()) || n.trim() === '') {
      alert('Please enter a valid number.');
      return;
   }
   n = parseInt(n);
   var result = "";

   for (var i = 1; i <= n; i++) {
      if (i % 5 == 0 && i % 11 == 0) {
         result += i + ' ';
      }
   }

   if (result === "") {

      alert("Enter a valid number divisible by 5 and 11");
      return;
   }

   document.getElementById("output").innerHTML = "Divisible Nos is :" + result;
}