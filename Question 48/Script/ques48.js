function countDigits() {
   var number = document.getElementById("number").value.trim();

   if (isNaN(number) || number === '') {
      alert("Please enter a numeric value");
      return;
   }
	if(number < 0){
	 alert("Please enter a positive value");
      return;
   }

   var numberStr = number.toString();

   var digitCount = numberStr.length;

   document.getElementById("result").innerHTML = "Number of Digits: " + digitCount;
}