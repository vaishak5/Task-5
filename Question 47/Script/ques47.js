function calculate() {
   var radius = document.getElementById("radius").value.trim();

   if (isNaN(radius) || radius <= 0 || radius === '') {
      alert("Please enter a valid positive radius!");
      return;
   }
   radius = parseFloat(radius);

   var surfaceArea = 4 * 3.14 * radius * radius;
   var volume = (4 / 3) * 3.14 * radius * radius * radius;

   var calculatedRadius = Math.sqrt(surfaceArea / (4 * 3.14));

   document.getElementById("result").innerHTML =
      "Sphere Surface Area: " + surfaceArea.toFixed(2) + "<br>" +
      "Sphere Volume: " + volume.toFixed(2) + "<br>" +
      "The radius of a Sphere: " + calculatedRadius.toFixed(2);
}