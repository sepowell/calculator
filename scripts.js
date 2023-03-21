let numberButton = document.querySelectorAll(".btn-num");
let mainOutput = document.querySelector(".main-output");

numberButton.forEach(button => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

function appendNumber(number) {
  mainOutput.textContent += number;
}