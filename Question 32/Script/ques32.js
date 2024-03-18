function checkPalindrome() {
   var inputString = document.getElementById("inputString").value.trim();

   if (inputString === '') {
      alert("Please enter string values:");
      return;
   }
   if (/\d/.test(inputString)) {
      alert("Please enter string values:");
      return;
   }
   var reversedString = "";

   for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
   }

   if (inputString == reversedString) {
      document.getElementById("output").innerHTML = "Palindrome!";
   } else {
      document.getElementById("output").innerHTML = "Not a Palindrome!";
   }
}