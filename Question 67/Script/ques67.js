function countCharacters() {
   var str = document.getElementById("inputString").value;
   var alphabetCount = 0;
   var digitCount = 0;
   var specialCount = 0;

   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (/[a-zA-Z]/.test(char)) {
         alphabetCount++;
      } else if (/\d/.test(char)) {
         digitCount++;
      } else {
         specialCount++;
      }
   }

   document.getElementById("result").innerHTML = "Alphabets: " + alphabetCount + "<br>" +
      "Digits: " + digitCount + "<br>" +
      "Special Symbols: " + specialCount;
}