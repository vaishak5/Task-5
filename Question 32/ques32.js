function checkPalindrome() {
   var inputString = document.getElementById("inputString").value.trim();


   var containsNumber = false;
   for (var i = 0; i < inputString.length; i++) {
      if (!isNaN(inputString[i])) {
         containsNumber = true;
         break;
      }
   }

   if (containsNumber) {
      alert("Please enter only string values");
      return;
   }
   var reversedString = "";

   for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
   }


   if (inputString === reversedString) {
      document.getElementById("output").innerHTML = "Palindrome!";
   } else {
      document.getElementById("output").innerHTML = "Not a Palindrome!";
   }
}