function printCharacters() {
   var inputString = document.getElementById("inputString").value;

   if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return; // Exit the function if a number is found
   }
   var resultElement = document.getElementById("result");


   for (var i = 0; i < inputString.length; i++) {
      var character = inputString.charAt(i);
      resultElement.appendChild(document.createTextNode(character + " "));

   }
}