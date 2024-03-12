function concatenateStrings() {
   var string1 = document.getElementById('string1').value;
   var string2 = document.getElementById('string2').value;
  
   var containsNumber = false;
   for (var i = 0; i < string1.length; i++) {
      if (!isNaN(string1[i])) {
         containsNumber = true;
         break;
      }
   }
	for (var i = 0; i < string2.length; i++) {
      if (!isNaN(string2[i])) {
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
   var concatenatedString = string1 + string2;
   document.getElementById('result').innerHTML = "Concatenated String: " + concatenatedString;
}