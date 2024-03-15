function printNumbers(num) {
   if (num <= 100) {
      document.write(num + '<br>');
      printNumbers(num + 1);
   }
}