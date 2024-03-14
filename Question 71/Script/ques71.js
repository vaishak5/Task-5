
function replaceLetters() {
    var str = document.getElementById("inputString").value;
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (char >= 'a' && char <= 'z') {
            
            result += String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
           
            result += String.fromCharCode((char.charCodeAt(0) - 65 + 1) % 26 + 65);
        } else {
           
            result += char;
        }
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
