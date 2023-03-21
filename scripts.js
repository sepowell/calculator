let mainOutput = document.querySelector(".main-output");
let clearButton = document.querySelector(".btn-clear");
let deleteButton = document.querySelector(".btn-delete");
let numberButton = document.querySelectorAll(".btn-num");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);

numberButton.forEach(button => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

function appendNumber(number) {
  mainOutput.textContent += number;
}

function clear() {
  mainOutput.textContent = 0;
}

function deleteNumber() {
  mainOutput.textContent = mainOutput.textContent.toString().slice(0, -1);
}