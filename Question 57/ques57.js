function findLastCharacter() {
   var inputString = document.getElementById('inputString').value;
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
      alert("Please enter any string values");
      return;
   }
   var lastCharacter = findLast(inputString);
   if (lastCharacter !== undefined) {
      document.getElementById('result').innerHTML = "Last Character: " + lastCharacter;
   } else {
      document.getElementById('result').innerHTML = "No character found.";
   }
}

function findLast(str) {
   if (str.length === 0) {
      return undefined;
   }
   return str.charAt(str.length - 1);
}