function findMiddleCharacter() {
    var inputString = document.getElementById("inputString").value.trim();
    var containsNumber = false;
	if(inputString===''){

   
        alert("Please enter only string values");
        return;
    }
	if(/\d/.test(inputString)){

   
        alert("Please enter only string values");
        return;
    }
    
    var length = inputString.trim().length; // Trim leading and trailing spaces

    if (length === 0) {
        document.getElementById("result").innerHTML= "Error: Empty string!";
    } else if (length % 2 === 0) {
        document.getElementById("result").innerHTML = "Error: No perfect middle!";
    } else {
        var middleIndex = Math.floor(length / 2);
        var middleCharacter = inputString.charAt(middleIndex);
        document.getElementById("result").innerHTML = "Middle Character: " + middleCharacter;
    }
}

