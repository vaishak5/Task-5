function calculate() {
   var radius = document.getElementById("radius").value.trim();
   var height = document.getElementById("height").value.trim();

   if (isNaN(radius) || isNaN(height) || radius < 0 || height < 0) {
      alert("Please enter valid values!");
      return;
   }
   if (radius === '' || height === '') {
      alert("Please enter valid values!");
      return;
   }
   radius = parseFloat(radius);
   height = parseFloat(height);


   var surfaceArea = (2 * 3.14 * radius * radius) + (2 * 3.14 * radius * height);
   var volume = 3.14 * radius * radius * height;
   var lateralSurfaceArea = 2 * 3.14 * radius * height;
   var topSurfaceArea = 3.14 * radius * radius;
   var bottomSurfaceArea = 3.14 * radius * radius;

   document.getElementById("result").innerHTML =
      "Surface Area: " + surfaceArea.toFixed(2) + "<br>" +
      "Volume: " + volume.toFixed(2) + "<br>" +
      "Lateral Surface Area: " + lateralSurfaceArea.toFixed(2) + "<br>" +
      "Top Surface Area:" + topSurfaceArea.toFixed(2) + "<br>" +
      "Bottom Surface Area:" + bottomSurfaceArea.toFixed(2);
}