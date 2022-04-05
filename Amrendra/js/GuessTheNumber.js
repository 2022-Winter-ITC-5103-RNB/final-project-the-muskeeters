"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1; // select random number
console.log(secretNumber);
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
let score = 20;
const again = document.querySelector(".again");
let highScore = 0;
//const message = document.querySelector(".message");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    displayMessage("No Number ");

    //When Players Wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = String(highScore);
    }
  }
  //When Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "Guess is too high 📈 " : "Guess is too Low 📉 "
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the Game!!! ");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Game Reset Functionnality
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing... ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  guess.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
