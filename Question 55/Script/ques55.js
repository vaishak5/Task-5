
        function convertByteToString() {
            var byte = [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]; 
            var str = byteToString(byte); 
            document.getElementById('result').innerHTML = "String: " + str;
        }

        function byteToString(byteArray) {
            var str = ''; 
            for (var i = 0; i < byteArray.length; i++) {
                str += String.fromCharCode(byteArray[i]); 
            }
            return str;
        }
    