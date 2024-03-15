function calculateCube() {

   var num = document.getElementById("num").value;


   if (isNaN(num) || num <= 0 || num === '') {
      alert("Please enter a valid  number ");
      return;
   }
   num = parseInt(num);

   var cube = num * num * num;


   document.getElementById("result").innerHTML = "The Cube of a number is: " + cube;
}