function printDay() {
   var userInput = document.getElementById("userInput").value;

   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


   if (isNaN(userInput.trim()) || userInput.trim() === '') {
      alert("Please enter a numeric value");
      return;
   }

   userInput = parseInt(userInput);

   if (userInput >= 1 && userInput <= 7) {
      var dayOfWeek = days[userInput - 1];
      document.getElementById("result").innerHTML = "The corresponding day is: " + dayOfWeek;
   } else {
      document.getElementById("result").innerHTML = "Please enter a number between 1 and 7.";
   }
}