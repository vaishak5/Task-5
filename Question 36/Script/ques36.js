function countNotes() {
   var amount = document.getElementById("num").value.trim();

   if (amount == "") {
      alert("Please enter any values!");
      return;
   }

   if (isNaN(amount) || amount <= 0) {
      alert("Please enter the valid amount!");
      return;
   }

   var amt = parseFloat(amount);
   var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
   var count = [];

   for (var i = 0; i < notes.length; i++) {
      var noteCount = Math.floor(amt / notes[i]);
      if (noteCount > 0) {
         count.push({
            denomination: notes[i],
            count: noteCount
         });
         amt %= notes[i];
      }
   }

   var result = " ";
   for (var j = 0; j < count.length; j++) {
      result += count[j].denomination + " Rupees notes: " + count[j].count + "<br>";
   }

   document.getElementById("result").innerHTML = result;
}