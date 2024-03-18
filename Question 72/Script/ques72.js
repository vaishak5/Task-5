function identifyMissingLetter() {
            var inputString = document.getElementById("inputString").value.toLowerCase();
            if (inputString === "") {
                alert("Please enter any string values");
                return;
            }

            if (/\d/.test(inputString)) {
                alert("Please enter any string values");
                return;
            }

            var str = inputString.split('').sort().join('');
            var char = str.charAt(0);
            var lastChar = str.charAt(str.length - 1);

            var missingLetters = "";

            for (var i = char.charCodeAt(0); i < lastChar.charCodeAt(0); i++) {
                if (!str.includes(String.fromCharCode(i))) {
                    missingLetters += String.fromCharCode(i) + "  ";
                }
            }

            if (missingLetters.length == 0) {
                document.getElementById("output").innerHTML = "There is no missing letter";
            } else {
                document.getElementById("output").innerHTML = "The missing letters are: " + missingLetters;
            }
        }