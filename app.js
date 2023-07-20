let lifeLine = 10;
const buttons = document.querySelectorAll(".btn");
const lifeIndicator = document.querySelector(".life-indicator");
const wordContainer = document.querySelector(".word-container");
const resetButton = document.querySelector(".game-over");
let randomWord = "";
const words = ["GERMANY", "JAPAN", "CONGO", "UGANDA", "CUBA"];

function clickButtonEvent(e) {
  if (!e.target.classList.contains("clicked")) {
    e.target.classList.add("clicked");
    if (randomWord.includes(e.target.textContent)) {
      matchWords(e.target.textContent);
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "pink";
      updateLife();
      lifeLine--;
    }
  }
  if (lifeLine === 0) {
    gameOver();
  }
}

matchWords = (letter) => {
  const char = document.querySelectorAll(".char");
  char.forEach((item) => {
    if (item.textContent === letter) {
      item.classList.remove("hidden");
    }
  });
};

buttons.forEach((btn) => btn.addEventListener("click", clickButtonEvent));

function updateLife() {
  lifeIndicator.textContent = `You have ${lifeLine} lives`;
}

function gameOver() {
  buttons.forEach((btn) => btn.removeEventListener("click", clickButtonEvent));
  lifeIndicator.textContent = `GAME OVER`;
}

function getRandomWord() {
  const word = words[Math.floor(Math.random() * words.length)];
  randomWord = word;

  const firstRow = document.querySelector(".first-row");
  const secondRow = document.querySelector(".second-row");

  for (let i = 0; i < randomWord.length; i++) {
    const char = randomWord[i];
    const div = document.createElement("td");
    div.setAttribute("data-id", char);
    div.setAttribute("class", "hidden char");
    div.textContent = char;
    firstRow.appendChild(div);

    const underLine = document.createElement("td");
    underLine.setAttribute("class", "underline");
    underLine.textContent = "_";
    secondRow.appendChild(underLine);
  }
}

window.addEventListener("load", (e) => {
  getRandomWord();
  updateLife();
});