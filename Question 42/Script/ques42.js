function calculateSalary() {
   var basicSalary = document.getElementById("basicSalary").value.trim();

   if (isNaN(basicSalary) || basicSalary < 0 || basicSalary === '') {
      alert("Please enter a valid basic salary!");
      return;
   }

   basicSalary = parseInt(basicSalary);
   var hra, da;

   if (basicSalary <= 10000) {
      hra = 0.08 * basicSalary;
      da = 0.1 * basicSalary;
   } else if (basicSalary <= 20000) {
      hra = 0.16 * basicSalary;
      da = 0.2 * basicSalary;
   } else {
      hra = 0.24 * basicSalary;
      da = 0.3 * basicSalary;
   }

   var grossSalary = basicSalary + hra + da;

   document.getElementById("result").innerHTML = "Gross Salary: Rs. " + grossSalary.toFixed(2);
}