function findLargestAndSmallestWord() {
    var str = document.getElementById("inputString").value.trim();
    if (/\d/.test(str) || str === '') {
        alert("Please enter string values.");
        return;
    }

    var words = str.split(/\s+/);

    var largestWords = [];
    var smallestWords = [];
    var largestLength = 0;
    var smallestLength = str.length;

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var wordLength = word.length;

        if (wordLength > largestLength) {
            largestWords = [word];
            largestLength = wordLength;
        } else if (wordLength === largestLength) {
            largestWords.push(word);
        }

        if (wordLength < smallestLength) {
            smallestWords = [word];
            smallestLength = wordLength;
        } else if (wordLength === smallestLength) {
            smallestWords.push(word);
        }
    }

    document.getElementById("result").innerHTML = "Largest word(s): " + largestWords.join(" ") + "<br>" +
        "Smallest word(s): " + smallestWords.join(" ");
}