let res = "";
let count = 0;
let countMarvin = 0;

const allOptions = ["rock", "paper", "scissors"];

const botChoice = function () {
  const wewew = allOptions[Math.floor(Math.random() * 3)];
  document.querySelector(".marvin-choice-res").textContent = wewew;
  return wewew;
};

const marvinWins = function () {
  document.querySelector(".round-res").textContent = "lost";
  document.querySelector(".round-res").style.color = "#dd2c00";
  countMarvin++;
  if (countMarvin === 10)
    document.querySelector(".result").textContent = "Marvin wins 🖥💻";
  document.querySelector(".marvin-box").textContent = countMarvin;
};

const youWin = function () {
  document.querySelector(".round-res").textContent = "won";

  document.querySelector(".round-res").style.color = "#76ff03";
  count++;

  if (count === 10)
    document.querySelector(".result").textContent =
      "Congratultaion!! You're the winner🎉✨";

  document.querySelector(".user-box").textContent = count;
};

//when user choose rock
const rockPressed = function () {
  document.querySelector(".your-choice").textContent = "rock";
  const marvin = botChoice();
  if (marvin === "rock") res = "draw";
  else if (marvin === "paper") marvinWins();
  else if (marvin === "scissors") youWin();
  return count;
};

//when user choose paper
const paperPressed = function () {
  document.querySelector(".your-choice").textContent = "paper";
  const marvin = botChoice();
  if (marvin === "rock") youWin();
  else if (marvin === "paper") res = "draw";
  else if (marvin === "scissors") marvinWins();
  return count;
};

//when user choose scissors
const scissorsPressed = function () {
  document.querySelector(".your-choice").textContent = "scissors";
  const marvin = botChoice();
  if (marvin === "rock") marvinWins();
  else if (marvin === "paper") youWin();
  else if (marvin === "scissors") res = "draw";
  return count;
};

const randomPressed = function () {
  const user = botChoice();
  const marvin = botChoice();

  if (marvin === user) res = "draw";
  //user win condition
  else if (
    (marvin === "rock" && user === "papaer") ||
    (marvin === "papaer" && user === "scissors") ||
    (marvin === "scissors" && user === "rock")
  )
    youWin();
  else marvinWins();

  return count;
};
