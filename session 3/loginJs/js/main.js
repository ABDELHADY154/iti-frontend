function formValidator() {
  let userNameInput = document.getElementById("userName");
  let passwordInput = document.getElementById("pass");

  if (userNameInput.value == "admin" && passwordInput.value == "421$$") {
    window.alert("Welcome login success");
  } else if (userNameInput.value !== "admin") {
    window.alert("Invalid username");
  } else {
    window.alert("Invalid password");
  }
}

function calc() {
  let num1 = parseFloat(window.prompt("enter the first number"));
  let operation = window.prompt(
    "enter the operation name (sum,multi,subtract,division,mod)"
  );
  let num2 = parseFloat(window.prompt("enter the second number"));
  let result;

  switch (operation) {
    case "sum":
      result = num1 + num2;

      break;
    case "multi":
      result = num1 * num2;

      break;
    case "subtract":
      result = num1 - num2;

      break;
    case "division":
      result = num1 / num2;

      break;
    case "mod":
      result = num1 % num2;
      break;

    default:
      alert("enter a valid operation");
      break;
  }
  let resultDiv = document.getElementById("calcResult");
  resultDiv.innerHTML = result;
}

function calc2() {
  let num1 = parseFloat(document.getElementById("calcResult").innerHTML);
  let prevResult = document.getElementById("calcResult");

  let operation = window.prompt(
    "enter the operation name (sum,multi,subtract,division,mod)"
  );
  let num2 = parseFloat(window.prompt("enter the second number"));
  let result;

  switch (operation) {
    case "sum":
      result = num1 + num2;

      break;
    case "multi":
      result = num1 * num2;

      break;
    case "subtract":
      result = num1 - num2;

      break;
    case "division":
      result = num1 / num2;

      break;
    case "mod":
      result = num1 % num2;
      break;

    default:
      alert("enter a valid operation");
      break;
  }
  let resultDiv = document.getElementById("calcResult2");
  prevResult.innerHTML = result;
  resultDiv.innerHTML = result;
}
