function calculateLength() {
   var inputString = document.getElementById("inputString").value.trim();
   if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return;
   }
	if(inputString===''){
      alert("Please enter only string values.");
      return;
   }

   var lengthWithFunction = len(inputString);
   document.getElementById("lenWithFunction").innerHTML = lengthWithFunction;


   var lengthWithoutFunction = inputString.length;
   document.getElementById("lenWithoutFunction").innerHTML = lengthWithoutFunction;
}


function len(str) {
   var count = 0;
   while (str[count] !== undefined) {
      count++;
   }
   return count;
}