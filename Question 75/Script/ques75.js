function replacePalindromes() {
    var inputString = document.getElementById("inputString").value;
    if (/\d/.test(inputString) || inputString === '') {
        alert("Please enter string values only");
        return;
    }

    var words = inputString.split(" ");
    var outputString = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length === 1) {
            outputString += word + " ";
        } else if (isPalindrome(word)) {
            outputString += "* ".repeat(word.length) + " ";
        } else {
            outputString += word + " ";
        }
    }

    document.getElementById("output").innerHTML = outputString.trim();
}

function isPalindrome(str) {
    str = str.toLowerCase(); // Convert to lowercase to ignore case
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}