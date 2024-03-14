function reverseVowels() {
   var str = document.getElementById("inputString").value;
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

   for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (vowels.includes(char)) {

         if (char === char.toLowerCase()) {
            char = char.toUpperCase();
         } else {
            char = char.toLowerCase();
         }
      }
      result += char;
   }

   document.getElementById("result").innerHTML = "Reversed Vowels: " + result;
}