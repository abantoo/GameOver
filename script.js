// //first to win 10 points

// //from user
// const userInput;

// //from random generator

const allOptions = ["rock", "paper", "scissors"];

//generate a number between 0-3
const loca = () => Math.floor(Math.random() * 3);

const aiTurn = () => allOptions[loca()];

// /*

// if !userInput within timer generate a random from rockpaper and SpeechSynthesisErrorEvent,
// else use userInput

// */

// //Number(userInput) == aiTurn; //draw

// document
//   .querySelector(".rock")
//   .addEventListener("click", console.log(allOptions[0]));
// document
//   .querySelector(".paper")
//   .addEventListener("click", console.log(allOptions[1]));
// document
//   .querySelector(".scissors")
//   .addEventListener("click", console.log(allOptions[2]));

// function rockPressed() {
//   console.log(allOptions[0]);

//   console.log(aiTurn(), loca());
// }

// function paPressed() {
//   console.log(allOptions[1]);

//   console.log(aiTurn(), loca());
// }

// function scPressed() {
//   console.log(allOptions[2]);
//   console.log(aiTurn(), loca());
// }

for (let i = 0; i < 30; i++) {
  console.log(loca(), allOptions[loca()]);
}
