function primeNumber() {
       var number = document.getElementById('number').value;
       if (number.trim() === '' || isNaN(number.trim())) {
          alert("Please enter a valid numeric value");
          return;
       }
       var n = parseInt(number);
       var i, flag = 0;
       if (n == 0 || n == 1) {
          flag = 1;
       }
       for (i = 2; i <= n / 2; i++) {
          if (n % i == 0) {
             flag = 1;
             break;
          }
       }

       if (flag == 0) {
          document.getElementById('result').innerHTML = "Prime Number";
       } else {
          document.getElementById('result').innerHTML = "Not a prime number";
       }
    }
