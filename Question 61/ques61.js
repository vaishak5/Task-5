function findCharacterIndex() {
   var inputString = document.getElementById("inputString").value;
   if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return;
   }

   var searchCharacter = document.getElementById("searchCharacter").value;

   if (/\d/.test(searchCharacter)) {
      alert("Please enter only string values.");
      return;
   }
   var index = inputString.indexOf(searchCharacter);

   if (index !== -1) {
      document.getElementById("result").textContent = "Index of '" + searchCharacter + "' in the string: " + index;
   } else {
      document.getElementById("result").textContent = "'" + searchCharacter + "' not found in the string.";
   }
}