function countOccurrences() {
   var str = document.getElementById("inputString").value;
   if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return;
   }
   var charToFind = document.getElementById("inputChar").value;
   if (/\d/.test(inputChar)) {
      alert("Please enter only string values.");
      return;
   }
   if (str === '' || charToFind === '') {
      alert("Please enter any string values.");
      return;
   }
   var count = 0;

   for (var i = 0; i < str.length; i++) {
      if (str[i] === charToFind) {
         count++;
      }
   }

   document.getElementById("result").innerHTML = "Occurrences of '" + charToFind + "' in the string: " + count;
}