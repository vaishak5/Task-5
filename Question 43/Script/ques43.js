function calculate() {
   var radius = document.getElementById("radius").value.trim();
   var height = document.getElementById("height").value.trim();
   var length = document.getElementById("length").value.trim();

   if (isNaN(radius) || isNaN(height) || isNaN(length) || radius < 0 || height < 0 || length < 0) {
      alert("Please enter valid values!");
      return;
   }
   if (isNaN(radius) === '' || isNaN(height) === '' || isNaN(length) === '') {
      alert("Please enter valid values!");
      return;
   }
   radius = parseFloat(radius);
   height = parseFloat(height);
   length = parseFloat(length);

   var surfaceArea = (3.14 * radius * length) + (3.14 * radius * radius);
   var volume = (1 / 3) * 3.14 * radius * radius * height;
   var lateralSurfaceArea = 3.14 * radius * length;

   document.getElementById("result").innerHTML =
      "Surface Area: " + surfaceArea.toFixed(2) + "<br>" +
      "Volume: " + volume.toFixed(2) + "<br>" +
      "Lateral Surface Area: " + lateralSurfaceArea.toFixed(2);
}