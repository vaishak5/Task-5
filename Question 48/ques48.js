function countDigits() {
   var number = document.getElementById("number").value.trim();

   if (isNaN(number) || number <= 0 || number === '') {
      alert("Please enter a numeric value");
      return;
   }

   var numberStr = number.toString();

   var digitCount = numberStr.length;

   document.getElementById("result").innerHTML = "Number of Digits: " + digitCount;
}