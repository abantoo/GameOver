let res = "";
let count = 0;
let countMarvin = 0;

const allOptions = ["rock", "paper", "scissors"];

const botChoice = function () {
  return allOptions[Math.floor(Math.random() * 3)];
};

const rockPressed = function () {
  const marvin = botChoice();
  if (marvin == "rock") res = "draw";
  else if (marvin == "paper") {
    res = "lose";
    countMarvin++;
    if (countMarvin == 10)
      document.querySelector(".result").textContent = "Marvin wins 🖥💻";
    document.querySelector(".marvin-box").textContent = countMarvin;
  } else if (marvin == "scissors") {
    res = "win";
    count++;
    document.querySelector(".user-box").textContent = count;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";
  }

  return count;
};

const paperPressed = function () {
  const marvin = botChoice();
  if (marvin == "rock") {
    res = "win";
    count++;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";

    document.querySelector(".user-box").textContent = count;
  } else if (marvin == "paper") res = "draw";
  else if (marvin == "scissors") {
    res = "lose";
    countMarvin++;
    if (countMarvin == 10)
      document.querySelector(".result").textContent = "Marvin wins 🖥💻";
    document.querySelector(".marvin-box").textContent = countMarvin;
  }
  return count;
};

const scissorsPressed = function () {
  const marvin = botChoice();
  if (marvin == "rock") {
    res = "lose";
    countMarvin++;
    if (countMarvin == 10)
      document.querySelector(".result").textContent = "Marvin wins 🖥💻";
    document.querySelector(".marvin-box").textContent = countMarvin;
  } else if (marvin == "paper") {
    res = "win";
    count++;

    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";

    document.querySelector(".user-box").textContent = count;
  } else if (marvin == "scissors") res = "draw";
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
  ) {
    res = "win";
    count++;
    if (count == 10)
      document.querySelector(".result").textContent =
        "Congratultaion You're the winner🎉✨";

    document.querySelector(".user-box").textContent = count;
  } else {
    countMarvin++;
    if (countMarvin == 10)
      document.querySelector(".result").textContent = "Marvin wins 🖥💻";
    document.querySelector(".marvin-box").textContent = countMarvin;
    res = "lose";
  }
};

// const randomPressed = function () {
//   const user = botChoice();
//   const marvin = botChoice();

//   const marvin = botChoice();

//   if (marvin === user) res = draw;
//   //user win condition
//   else if (
//     (marvin === "rock" && user === "papaer") ||
//     (marvin === "papaer" && user === "scissors") ||
//     (marvin === "scissors" && user === "rock")
//   ) {
//     res = "win";
//     count++;
//     if(count === 10)
//   }

//   else {
//     res = "lose";

//   }

// };
