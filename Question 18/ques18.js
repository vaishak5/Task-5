function calculateTotal() {
   var physicsMarks = document.getElementById("physics").value;
   var chemistryMarks = document.getElementById("chemistry").value;
   var mathsMarks = document.getElementById("maths").value;
   if (physicsMarks.trim() === '' || isNaN(physicsMarks.trim()) || chemistryMarks.trim() === '' || isNaN(chemistryMarks.trim()) || mathsMarks.trim() === '' || isNaN(mathsMarks.trim())) {
      alert("Please enter a valid numeric value");
      return;
   }
   physicsMarks = parseInt(physicsMarks);
   chemistryMarks = parseInt(chemistryMarks);
   mathsMarks = parseInt(chemistryMarks);

   var totalMarks = physicsMarks + chemistryMarks + mathsMarks;
   var totalMP = physicsMarks + mathsMarks;

   document.getElementById("total").value = totalMarks;
   document.getElementById("totalMP").value = totalMP;
}

function checkEligibility() {
   var physicsMarks = parseInt(document.getElementById("physics").value);
   var chemistryMarks = parseInt(document.getElementById("chemistry").value);
   var mathsMarks = parseInt(document.getElementById("maths").value);
   var totalMarks = parseInt(document.getElementById("total").value);
   var totalMP = parseInt(document.getElementById("totalMP").value);

   var eligibilityMessage = "";

   if (physicsMarks >= 65 && chemistryMarks >= 55 && mathsMarks >= 50 && totalMarks >= 190) {
      eligibilityMessage = "The candidate is eligible.";
   } else if (totalMP >= 140) {
      eligibilityMessage = "The candidate is eligible.";
   } else {
      eligibilityMessage = "The candidate is not eligible.";
   }

   document.getElementById("result").innerHTML = eligibilityMessage;
}