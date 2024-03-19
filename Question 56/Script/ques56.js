function findFirstCharacter() {
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
   var firstCharacter = findFirst(inputString);
   if (firstCharacter !== undefined) {
      document.getElementById('result').innerHTML = "First Character: " + firstCharacter;
   } else {
      document.getElementById('result').innerHTML = "No character found.";
   }
}

function findFirst(str) {
   if (str.length === 0) {
      return undefined;
   }
   return str.charAt(0);
}