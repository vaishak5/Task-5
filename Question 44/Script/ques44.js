function calculate() {
   var length = document.getElementById("length").value.trim();

   if (isNaN(length) || length < 0 || length === '') {
      alert("Please enter a valid positive number!");
      return;
   }

   length = parseFloat(length);

   var surfaceArea = 6 * length * length;
   var volume = length * length * length;
   var lateralSurfaceArea = 4 * (length * length);

   document.getElementById("result").innerHTML =
      "Surface Area: " + surfaceArea.toFixed(2) + "<br>" +
      "Volume: " + volume.toFixed(2) + "<br>" +
      "Lateral Surface Area: " + lateralSurfaceArea.toFixed(2);
}