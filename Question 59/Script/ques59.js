function printCharacters() {
   var inputString = document.getElementById("inputString").value.trim();

   if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return; // Exit the function if a number is found
   }
	if(inputString===''){
      alert("Please enter only string values.");
      return;
   }
   
   var resultElement = document.getElementById("result");
   var printedCharacters = {}; 

   
   resultElement.innerHTML = "";

   for (var i = 0; i < inputString.length; i++) {
      var character = inputString.charAt(i);
      if (!printedCharacters[character]) {
         resultElement.appendChild(document.createTextNode(character + " "));
         printedCharacters[character] = true;
      }
   }
}