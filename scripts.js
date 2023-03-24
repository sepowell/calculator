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
let multiplyButton = document.querySelector(".btn-multiply");
let divideButton = document.querySelector(".btn-divide");
let decimalButton = document.querySelector(".btn-opp");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', evaluate);
addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
decimalButton.addEventListener('click', appendDecimal);

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
    case "-":
      answer = Number(firstOperand) - Number(secondOperand);
      break;
    case "*":
      answer  = Number(firstOperand) * Number(secondOperand);
      break;
    case "/":
      if (secondOperand == 0) {
        alert("You can't divide by 0!");
        return;
      }
      answer = Number(firstOperand) / Number(secondOperand);
      break;
  }
  mainOutput.textContent = roundResult(answer);
  firstOperand = answer;
  secondOperand = "";
  evaluated = "true";
  operator = "";
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function appendDecimal() {
  if (mainOutput.textContent.length == 10) return;
  mainOutput.textContent += "."; 
}

function add() {
  if (mainOutput.textContent == "") return;
  if (operator == "-" || operator == "*" || operator == "/") {
    evaluate();
  }
  if (operator == "") {
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
  } else {
    console.log("error");
  }
}

function subtract() {
  if (mainOutput.textContent == "") return;
  if (operator == "+" || operator == "*" || operator == "/") {
    evaluate();
  }
  if (operator == "") {
    operator = "-";
    evaluated = "";
    if (!firstOperand == "" && !secondOperand == "") {
      evaluate();
      return; 
    } else {
      secondOutput.textContent = `${firstOperand} ${operator}`;
    }  
    readToSecond = "true"; 
    mainOutput.textContent = "";
  } else {
    console.log("error");
  }
}

function multiply() {
  if (mainOutput.textContent == "") return;
  if (operator == "+" || operator == "-" || operator == "/") {
    evaluate();
  }
  if (operator == "") {
    operator = "*";
    evaluated = "";
    if (!firstOperand == "" && !secondOperand == "") {
      evaluate();
      return; 
    } else {
      secondOutput.textContent = `${firstOperand} ${operator}`;
    }  
    readToSecond = "true"; 
    mainOutput.textContent = "";
  } else {
    console.log("error");
  }
}

function divide() {
  if (mainOutput.textContent == "") return;
  if (operator == "+" || operator == "*" || operator == "-") {
    evaluate();
  }
  if (operator == "") {
    operator = "/";
    evaluated = "";
    if (!firstOperand == "" && !secondOperand == "") {
      evaluate();
      return; 
    } else {
      secondOutput.textContent = `${firstOperand} ${operator}`;
    }  
    readToSecond = "true"; 
    mainOutput.textContent = "";
  } else {
    console.log("error");
  }
}