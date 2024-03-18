function consonent() {

   var inputString = document.getElementById("inputString").value.trim();
   if (/\d/.test(inputString) || inputString === '') {
      alert("Please Enter string values:");
      return;
   }
   var str = '';
   for (var i = 0; i < inputString.length; i++) {

      if ((/[aeiouAEIOU]/).test(inputString[i])) {

         str += inputString[i];
      }
   }

   document.getElementById("result").innerHTML = "The String  after deleting the consonants is : " + str;
}