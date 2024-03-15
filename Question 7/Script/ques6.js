function calculateArea() {

   var radius = document.getElementById("radius").value;


   if (isNaN(radius) || radius <= 0 || radius === '') {
      alert("Please enter a valid  number for the radius.");
      return;
   }
   radius = parseInt(radius);

   var area = 3.14 * radius * radius;


   document.getElementById("result").innerHTML = "The area of the circle is: " + area.toFixed(2);
}