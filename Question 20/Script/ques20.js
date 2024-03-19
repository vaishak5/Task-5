function appendToDisplay(value) {
   document.getElementById("input").value += value;
}

function deleteAll() {
   var displayValue = document.getElementById('input').value;
   document.getElementById('input').value = displayValue.slice(0, -1);

}

function clearAll() {
   document.getElementById("input").value = "";
}

function calculate() {
   var input = document.getElementById("input").value;
   var result = eval(input);
   document.getElementById("input").value = result;
}