function calculateBill() {
   var units = document.getElementById("units").value.trim();

   if (isNaN(units) || units < 0) {
      alert("Please enter a valid number of units!");
      return;
   }
   if (isNaN(units) === '') {
      alert("Please enter a valid number of units!");
      return;
   }

   units = parseInt(units);
   var totalCost = 0;

   if (units <= 50) {
      totalCost = units * 2.60;
   } else if (units <= 100) {
      totalCost = 50 * 2.60 + (units - 50) * 3.25;
   } else if (units <= 200) {
      totalCost = 50 * 2.60 + 50 * 3.25 + (units - 100) * 5.65;
   } else {
      totalCost = 50 * 2.60 + 50 * 3.25 + 100 * 5.65 + (units - 200) * 7.25;
   }

   if (units > 700) {
      totalCost += totalCost * 0.005;
   }

   document.getElementById("result").innerHTML = "Total Bill Amount: Rs. " + totalCost.toFixed(2);
}