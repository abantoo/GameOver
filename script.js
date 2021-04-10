// //first to win 10 points

let res;
let count = 0;
let countMarvin = 0;

const allOptions = ["rock", "paper", "scissors"];

//generate a number between 0-3 and get a option from allsrings
const botChoice = function () {
  return allOptions[Math.floor(Math.random() * 3)];
};

function rockPressed() {
  const marvin = botChoice();
  if (marvin == "rock") res = "draw";
  else if (marvin == "paper") res = "lose";
  else if (marvin == "scissors") {
    res = "win";
    count++;
    document.querySelector(".score_box").textContent = count;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";
  }
  console.log(res);
}

function paPressed() {
  const marvin = botChoice();
  if (marvin == "rock") {
    res = "win";
    count++;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";

    document.querySelector(".score_box").textContent = count;
  } else if (marvin == "paper") res = "draw";
  else if (marvin == "scissors") {
    res = "lose";
    countMarvin++;
  }
  console.log(res);
}

function scPressed() {
  const marvin = botChoice();
  if (marvin == "rock") {
    res = "lose";
    countMarvin++;
  } else if (marvin == "paper") {
    res = "win";
    count++;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";

    document.querySelector(".score_box").textContent = count;
  } else if (marvin == "scissors") res = "draw";
  console.log(res);
}

//document.querySelector(".score_box").textContent = count;

//document.querySelector(".score_box").textContent = countMarvin;

if (count == 10)
  document.querySelector(".result").textContent =
    "Congratultaion You're the winner🎉✨";
