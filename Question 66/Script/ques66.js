function reverseVowels() {
   var str = document.getElementById("inputString").value.trim();
   if (/\d/.test(str)) {
      alert("Please enter string values:");
      return;
   }
   if (str === '') {
      alert("Please enter any string values:");
      return;
   }

   var vowels = 'aeiouAEIOU';
   var result = '';
   var vowelArray = [];
   
   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (vowels.includes(char)) {
         vowelArray.push(char);
      }
   }

   var reversedVowels = vowelArray.reverse();
   var vowelIndex = 0;

   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (vowels.includes(char)) {
         result += reversedVowels[vowelIndex++];
      } else {
         result += char;
      }
   }

   document.getElementById("result").innerHTML = "Reversed Vowels: " + result;
}