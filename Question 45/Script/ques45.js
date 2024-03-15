function calculate() {
   var width = document.getElementById("width").value.trim();
   var height = document.getElementById("height").value.trim();
   var length = document.getElementById("length").value.trim();
   var breadth = document.getElementById("breadth").value.trim();

   if (isNaN(width) || isNaN(height) || isNaN(length) || isNaN(breadth) || width < 0 || height < 0 || length < 0 || breadth < 0) {
      alert("Please enter valid positive values!");
      return;
   }
   if (width === '' || height === '' || length === '' || breadth === '') {
      alert("Please enter valid values!");
      return;
   }
   width = parseFloat(width);
   height = parseFloat(height);
   length = parseFloat(length);
   breadth = parseFloat(breadth);
   var surfaceArea = (2 * length * width) + (2 * length * height) + (2 * width * height);
   var volume = length * breadth * height;
   var lateralSurfaceArea = 2 * height * (length + width);

   document.getElementById("result").innerHTML =
      "Surface Area: " + surfaceArea.toFixed(2) + "<br>" +
      "Volume: " + volume.toFixed(2) + "<br>" +
      "Lateral Surface Area: " + lateralSurfaceArea.toFixed(2);
}