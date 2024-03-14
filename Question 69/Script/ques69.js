function checkClosure() {
    var inputString = document.getElementById("inputString").value;
    var stack = [];
    var closingChars = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];

        if (char in closingChars) {
            stack.push(char);
        } else if (Object.values(closingChars).includes(char)) {
            if (stack.length === 0 || closingChars[stack.pop()] !== char) {
                document.getElementById("output").innerHTML = "The string contains unclosed characters.";
                return;
            }
        }
    }

    if (stack.length === 0) {
        document.getElementById("output").innerHTML = "The string contains correctly closed characters.";
    } else {
        document.getElementById("output").innerHTML = "The string contains unclosed characters.";
    }
}
