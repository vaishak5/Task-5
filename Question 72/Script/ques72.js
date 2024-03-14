function identifyMissingLetter() {

   var inputString = document.getElementById("inputString").value;


   var str = inputString.toLowerCase();


   var alphabet = 'abcdefghijklmnopqrstuvwxyz';


   for (var i = 0; i < alphabet.length; i++) {

      if (!str.includes(alphabet[i])) {

         document.getElementById("output").innerHTML = "Missing letter:" + alphabet[i];
         return;
      }
   }


   document.getElementById("output").innerHTML = "There is no missing letter!";
}