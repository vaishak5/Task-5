
function countVowelsAndConsonants() {
    var str = document.getElementById("inputString").value;
	if(/\d/.test(str) || str===''){
	alert("Please enter string values only:");
	return;
}
    var vowels = 'aeiouAEIOU';
    var vowelCount = 0;
    var consonantCount = 0;

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (/[a-zA-Z]/.test(char)) {
            consonantCount++;
        }
    }

    document.getElementById("result").innerHTML = "Vowels: " + vowelCount + "<br>" +
                                                    "Consonants: " + consonantCount;
}
