function swapNumbers() {
   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;

   if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
      alert("Please enter numeric fields");
      return;
   }

   num1 = parseInt(num1);
   num2 = parseInt(num2);

   var temp = num1;
   num1 = num2;
   num2 = temp;

   document.getElementById("result").innerHTML = "After swapping:<br>Number 1: " + num1 + "<br>Number 2: " + num2;
}