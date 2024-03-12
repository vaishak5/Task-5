function checkPalindrome() {
   var number = document.getElementById('number').value;

   if (number.trim() === '' || isNaN(number.trim())) {
      alert("Please enter a valid numeric value");
      return;
   }


   var r, sum = 0,
      temp;
   var temp = number;
   while (number > 0) {
      r = number % 10;
      sum = (sum * 10) + r;
      number = Math.floor(number / 10);
   }

   if (temp == sum) {
      document.getElementById('result').innerHTML = "Palindrome Number";
   } else {
      document.getElementById('result').innerHTML = "Non-Palindrome Number";
   }

}
