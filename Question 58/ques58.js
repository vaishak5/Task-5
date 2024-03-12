function findMiddleCharacter() {
    var inputString = document.getElementById("inputString").value;
    var containsNumber = false;

    for (var i = 0; i < inputString.length; i++) {
        if (!isNaN(inputString[i]) && inputString[i] !== " ") {
            containsNumber = true;
            break;
        }
    }

    if (containsNumber) {
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

