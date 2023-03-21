let numberButton = document.querySelectorAll(".btn-num");
let clearButton = document.querySelector(".btn-clear");
let mainOutput = document.querySelector(".main-output");

clearButton.addEventListener('click', clear);

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