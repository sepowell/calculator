let firstOperand = "";
let secondOperand = "";
let problem = "";

let mainOutput = document.querySelector(".main-output");
let secondOutput = document.querySelector(".secondary-output");
let clearButton = document.querySelector(".btn-clear");
let deleteButton = document.querySelector(".btn-delete");
let numberButton = document.querySelectorAll(".btn-num");
let equalsButton = document.querySelector(".btn-equals");
let addButton = document.querySelector(".btn-add");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', evaluate);
addButton.addEventListener('click', add);

numberButton.forEach(button => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

function appendNumber(number) {
  mainOutput.textContent += number;
}

function clear() {
  mainOutput.textContent = "";
  secondOutput.textContent = "";
  firstOperand = 0;
  secondOperand = 0;
}

function deleteNumber() {
  mainOutput.textContent = mainOutput.textContent.toString().slice(0, -1);
}

function evaluate() {
  if (secondOutput.textContent == "") return;
  secondOperand = mainOutput.textContent;
  if (firstOperand == "" || secondOperand == "") return;
  secondOutput.textContent += " " + mainOutput.textContent + " " + "=";
  switch (problem) {
    case "addition":  
      mainOutput.textContent = Number(firstOperand) + Number(secondOperand);
    break

  }
  firstOperand = "";
}

function add() {
  if (mainOutput.textContent == "") return;
  if (!mainOutput.textContent == "") {
    evaluate();
  }
  firstOperand = mainOutput.textContent;
  secondOutput.textContent = mainOutput.textContent + ' ' + '+';
  mainOutput.textContent = "";
  problem = "addition";
}

