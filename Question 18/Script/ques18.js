function calculateTotal() {
   var physicsMarks = document.getElementById("physics").value.trim();
   var chemistryMarks = document.getElementById("chemistry").value.trim();
   var mathsMarks = document.getElementById("maths").value.trim();
   if (physicsMarks === '' || isNaN(physicsMarks.trim()) || chemistryMarks === '' || isNaN(chemistryMarks.trim()) || mathsMarks === '' || isNaN(mathsMarks.trim())) {
      alert("Please enter a valid numeric value");
      return;
   }
   physicsMarks = parseInt(physicsMarks);
   chemistryMarks = parseInt(chemistryMarks);
   mathsMarks = parseInt(mathsMarks);

   var totalMarks = physicsMarks + chemistryMarks + mathsMarks;
   var totalMP = physicsMarks + mathsMarks;

   document.getElementById("total").value = totalMarks;
   document.getElementById("totalMP").value = totalMP;
}

function checkEligibility() {
   var physicsMarks = document.getElementById("physics").value.trim();
   var chemistryMarks = document.getElementById("chemistry").value.trim();
   var mathsMarks = document.getElementById("maths").value.trim();
   var totalMarks = document.getElementById("total").value.trim();
   var totalMP = document.getElementById("totalMP").value.trim();
   physicsMarks = parseInt("physicsMarks");
   chemistryMarks = parseInt("chemistryMarks");
   mathsMarks = parseInt("mathsMarks");
   totalMarks = parseInt("totalMarks");
   totalMP = parseInt("totalMP");
   if (totalMarks === '' || isNaN(totalMarks) || totalMP === '' || isNaN(totalMP)) {
      alert("Please enter a valid numeric value");
      return;
   }

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