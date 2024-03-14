function findLargestAndSmallestWord() {
   var str = document.getElementById("inputString").value;
   if (/\d/.test(str) || str === '') {
      alert("Please Enter string values:");
      return;
   }
   var words = str.split(/\s+/);

   var largestWord = '';
   var smallestWord = str;

   for (var i = 0; i < words.length; i++) {
      var word = words[i];

      if (word.length > largestWord.length) {
         largestWord = word;
      }

      if (word.length < smallestWord.length) {
         smallestWord = word;
      }
   }

   document.getElementById("result").innerHTML = "Largest word: " + largestWord + "<br>" +
      "Smallest word: " + smallestWord;
}