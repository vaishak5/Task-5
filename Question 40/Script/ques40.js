function calculate() {
    var n = parseInt(document.getElementById('number').value);
    if (isNaN(n) || n < 0) {
        alert("Please enter a valid number.");
        return;
    }

    var sumEven = 0;
    var sumOdd = 0;

    for (var i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }

    document.getElementById('result').innerHTML = "<p>Sum of even numbers is: " + sumEven + "</p><p>Sum of odd numbers is: " + sumOdd + "</p>";
}
