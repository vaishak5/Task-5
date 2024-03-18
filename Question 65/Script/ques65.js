function reverseCase() {
   var str = document.getElementById("inputString").value.trim();
   if (/\d/.test(str)) {
      alert("Please enter only string values.");
      return;
   }
   if (str === '') {
      alert("Please enter any string values.");
      return;
   }
   var reversedString = '';

   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (char === char.toUpperCase()) {
         reversedString += char.toLowerCase();
      } else {
         reversedString += char.toUpperCase();
      }
   }

   document.getElementById("result").innerHTML = "Reversed Case: " + reversedString;
}