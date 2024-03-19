function convertByteToString() {
    var inputValue = document.getElementById('inputValue').value.trim();
   if(inputValue===''){
	alert("Please enter valid number");
	return;
}
    var byteArray = inputValue.split(',').map(function(item) {
        return parseInt(item.trim(), 10);
    });
    var str = byteToString(byteArray);
    document.getElementById('result').innerHTML = "String: " + str;
}

function byteToString(byteArray) {
    var str = '';
    for (var i = 0; i < byteArray.length; i++) {
        str += String.fromCharCode(byteArray[i]);
    }
    return str;
}