function printASCII() {
   var inputString = document.getElementById('inputString').value.trim();
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
   if (inputString === '') {
      alert("Please enter only string values");
      return;
   }
   var asciiResult = '';

   for (var i = 0; i < inputString.length; i++) {
      var char = inputString.charAt(i);
      var asciiValue = char.charCodeAt(0);
      asciiResult += char + ' : ' + asciiValue + '<br>';
   }

   document.getElementById('result').innerHTML = asciiResult;
}