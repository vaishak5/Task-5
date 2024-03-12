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
   if (string1 === '' || string2 === '') {
      alert("Please enter any string values");
      return;
   }
   var concatenatedString = concatenate(string1, string2);
   document.getElementById('result').innerHTML = "Concatenated String: " + concatenatedString;
}

function concatenate(str1, str2) {
   var result = '';

   for (var i = 0; i < str1.length; i++) {
      result += str1.charAt(i);
   }

   for (var j = 0; j < str2.length; j++) {
      result += str2.charAt(j);
   }
   return result;
}