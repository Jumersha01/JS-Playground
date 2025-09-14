let score = 0;
let timeLeft = 20;

const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const box = document.querySelector(".box");
const container = document.querySelector(".container");


function moveBox() {
  const maxX = container.clientWidth - 60;
  const maxY = container.clientHeight - 60;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}


box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveBox();
});


let timer = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    box.style.display = "none";
    timeDisplay.textContent = "Game Over!";
  }
}, 1000);

moveBox();
