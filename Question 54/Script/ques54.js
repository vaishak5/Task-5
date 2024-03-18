function concatenateStrings() {
   var string1 = document.getElementById('string1').value.trim();
   var string2 = document.getElementById('string2').value.trim();

   if (string1 === '' || string2 === '') {
      alert("Please enter only string values");
      return;
   }
   if ((/\d/.test(string1)) || (/\d/.test(string2))) {
         alert("Please enter only string values");
         return;
      }
	var concatenatedString="";
     
      var concatenatedString = string1 + string2; 
	document.getElementById('result').innerHTML = "Concatenated String: " + concatenatedString;
   }