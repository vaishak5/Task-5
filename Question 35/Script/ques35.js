function checkNumber() {

   var num = document.getElementById("number").value.trim();


   if (isNaN(num) || num === '') {
      alert("Please enter a valid  number ");
      return;
   }
   num = parseInt(num);

   if (num > 0) {


      document.getElementById("result").innerHTML = "Positive number";

   } else {
      document.getElementById("result").innerHTML = "Negative number";
   }
	if(num==0){
	document.getElementById("result").innerHTML = "Number is zero";
	}
}