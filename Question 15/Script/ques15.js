function reverseNumber() {
    var number = document.getElementById('number').value;

    if (number.trim() === '' || isNaN(number.trim())) {
        alert("Please enter a valid numeric value");
        return;
    }
var parsedNumber = parseInt(number);

    if (parsedNumber <= 0) {
        alert("Please enter a positive number");
        return;
    }
    

    var reversedNumber = 0;
    var remainder;
    var num = parsedNumber;

    while (num !== 0) {
        remainder = num % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        num = Math.floor(num / 10);
    }

    document.getElementById('result').innerHTML = "Reversed number: " + reversedNumber;
}
