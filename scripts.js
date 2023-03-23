let firstOperand = "";
let secondOperand = "";
let problem = "";
let operator = "";
let answer = "";
let evaluated = "";

let readToSecond = "false";

let mainOutput = document.querySelector(".main-output");
let secondOutput = document.querySelector(".secondary-output");
let clearButton = document.querySelector(".btn-clear");
let deleteButton = document.querySelector(".btn-delete");
let numberButton = document.querySelectorAll(".btn-num");
let equalsButton = document.querySelector(".btn-equals");
let addButton = document.querySelector(".btn-add");
let subtractButton = document.querySelector(".btn-subtract");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', evaluate);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);


numberButton.forEach(button => {
  button.addEventListener("click", () => {
    if (evaluated == "true") {
      clear()
    }
    appendNumber(button.textContent);
  });
});

function appendNumber(number) {
  if (mainOutput.textContent.length == 10) return;
  mainOutput.textContent += number;
  if (readToSecond == "false") {
    firstOperand = mainOutput.textContent;
  } else {
    secondOperand = mainOutput.textContent;
  }
}

function clear() {
  mainOutput.textContent = "";
  secondOutput.textContent = "";
  firstOperand = "";
  secondOperand = "";
  problem = "";
  operator = "";
  answer = "";
  readToSecond = "false";
  evaluated = "";
}

function deleteNumber() {
  mainOutput.textContent = mainOutput.textContent.toString().slice(0, -1);
}

function evaluate() {
  if (firstOperand == "" || secondOperand == "" || secondOutput.textContent == "") return;
  secondOutput.textContent = `${firstOperand} ${operator} ${secondOperand} =`
  switch (operator) {
    case "+":  
      answer = Number(firstOperand) + Number(secondOperand);
      break;
    case "subtraction":
      mainOutput.textContent = Number(firstOperand) - Number(secondOperand);
      break;
  }
  mainOutput.textContent = answer;
  firstOperand = answer;
  secondOperand = "";
  evaluated = "true";
}

function add() {
  if (mainOutput.textContent == "") return;
  operator = "+";
  evaluated = "";
  if (!firstOperand == "" && !secondOperand == "") {
    evaluate();
    return; 
  } else {
    secondOutput.textContent = `${firstOperand} ${operator}`;
  }  
  readToSecond = "true"; 
  mainOutput.textContent = "";
}

function subtract() {
  if (mainOutput.textContent == "") return;
  if (!mainOutput.textContent == "") {
    evaluate();
  }
  firstOperand = mainOutput.textContent;
  secondOutput.textContent = mainOutput.textContent + ' ' + '-';
  mainOutput.textContent = "";
  problem = "subtraction";
}

