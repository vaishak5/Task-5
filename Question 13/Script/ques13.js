
function calculatePower() {
   var base = document.getElementById('base').value;
   var exponent = document.getElementById('exponent').value;
   if (isNaN(base) || isNaN(exponent) || base === '' || exponent === '') {
      alert("Please enter numeric fields");
      return;
   }

   base = parseFloat(base);
   exponent = parseFloat(exponent);
   var result = Math.pow(base, exponent);


   document.getElementById('result').innerHTML = "Result is:" + result ;
}

