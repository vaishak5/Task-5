function countOccurrences() {
   var inputString = document.getElementById("inputString").value.trim();
   
   if (/\d/.test(inputString) || inputString === '') {
      alert("Please enter string values:");
      return;
   }
   
   var alphabetCount = {};

   var str = inputString.toLowerCase();

   var i = 0;
   while (i < str.length) {
      var char = str[i];

      if (/^[a-z]$/.test(char)) {
         if (alphabetCount[char] === undefined) {
            alphabetCount[char] = 1;
         } else {
            alphabetCount[char]++;
         }
      }
      i++;
   }

   var maxCount = 0;
   var maxChars = [];

  
   var alphabetKeys = Object.keys(alphabetCount);
   var j = 0;
   while (j < alphabetKeys.length) {
      var char = alphabetKeys[j];

      if (alphabetCount[char] > maxCount) {
         maxCount = alphabetCount[char];
         maxChars = [char];
      } else if (alphabetCount[char] === maxCount) {
         maxChars.push(char); 
      }
      j++;
   }

   var output = "Occurrences of all alphabets:<br>";
   var k = 0;
   while (k < alphabetKeys.length) {
      var char = alphabetKeys[k];
      output += char + ": " + alphabetCount[char] + "<br>";
      k++;
   }

   
   output += "<br>Maximum number of alphabet occurrence is: " + maxCount + " for the characters " + maxChars.join(", ") + "";

   document.getElementById("output").innerHTML = output;
}