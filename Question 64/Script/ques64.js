function replaceString() {
   var originalString = document.getElementById("originalString").value.trim();
   if (/\d/.test(originalString)) {
      alert("Please enter only string values.");
      return;
   }
   var searchString = document.getElementById("searchString").value.trim();
   if (/\d/.test(searchString)) {
      alert("Please enter only string values.");
      return;
   }
   var replacementString = document.getElementById("replacementString").value.trim();
   if (/\d/.test(replacementString)) {
      alert("Please enter only string values.");
      return;
   }
   if (originalString === '' || searchString === '' || replacementString === '') {
      alert("Please enter any string values.");
      return;
   }

   var replacedString = originalString.replace(new RegExp(searchString, 'g'), replacementString);

   document.getElementById("result").innerHTML = "Result: " + replacedString;
}