
function checkPrefix() {
    var str = document.getElementById("inputString").value;
	 if (/\d/.test(inputString)) {
      alert("Please enter only string values.");
      return;
   }
    var prefix = document.getElementById("inputPrefix").value;
	if (/\d/.test(inputPrefix)) {
      alert("Please enter only string values.");
      return;
   }
   if (str === '' || prefix === '') {
      alert("Please enter any string values.");
      return;
   }

    if (str.startsWith(prefix)) {
        document.getElementById("result").innerHTML = "The specified substring is a prefix of the given string.";
    } else {
        document.getElementById("result").innerHTML = "The specified substring is not a prefix of the given string.";
    }
}
