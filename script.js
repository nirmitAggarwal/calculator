document.addEventListener("DOMContentLoaded", function () {
  var number = "";
  var numberTwo = "";
  var selectedOperator = "";
  var result = document.getElementById("display");

  // Clear display
  document.querySelector(".clear").addEventListener("click", function () {
    number = "";
    numberTwo = "";
    selectedOperator = "";
    result.textContent = "0";
  });

  // Sloppy +/- change
  function signChange() {
    number *= -1;
    result.textContent = number;
    console.log("signchange: " + number);
  }
  document.getElementById("pnsign").addEventListener("click", signChange);

  // Enter numbers and decimal
  var numberButtons = document.querySelectorAll(".number");
  numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      number += button.textContent;
      result.textContent = number;
      console.log(number);
    });
  });

  var operatorButtons = document.querySelectorAll(".operator:not(#eval)");
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedOperator = button.textContent;
      numberTwo = number;
      number = "";
      console.log("op:" + selectedOperator);
      console.log("2:" + numberTwo);
      console.log("1:" + number);
    });
  });

  // Do the operation
  document.getElementById("eval").addEventListener("click", function () {
    if (selectedOperator === "+") {
      number = parseFloat(numberTwo) + parseFloat(number);
    } else if (selectedOperator === "-") {
      number = parseFloat(numberTwo) - parseFloat(number);
    } else if (selectedOperator === "×") {
      number = (parseFloat(numberTwo) * parseFloat(number)).toPrecision(5);
    } else if (selectedOperator === "÷") {
      number = (parseFloat(numberTwo) / parseFloat(number)).toPrecision(5);
    } else if (selectedOperator === "xy") {
      number = Math.pow(numberTwo, number).toPrecision(5);
    } else if (selectedOperator === "√") {
      number = Math.sqrt(numberTwo);
    }
    result.textContent = number;
    number = "";
    numberTwo = "";
  });
});
