const game1 = document.querySelector(".quiz-content");
const btn1 = document.querySelector(".Start-game-but");
const swords = document.querySelector("#swords");
const myInput = document.querySelector(".user-input");
const scoreBoard = document.querySelector(".score-board");
const btn2 = document.querySelector(".next-question");
const question = document.querySelector(".question");
const wordJumble = document.querySelector(".wordJumble");
const result = document.querySelector(".result");
const game2Butn = document.querySelector(".Start-game2-but");
const quiz = document.querySelector(".quiz");
const restart = document.querySelector(".reset-game-but");
const but1Div = document.querySelector(".start-button");
const quizcontent = document.querySelector(".quiz-content");

//Variable for game

console.log(btn1);

const myWords = [
  "Program",
  "Encapsulation",
  "compiler",
  "goto",
  "switch",
  "Initialization",
  "Condition",
  "class",
];
const game = { sel: "", scramble: "", score: 0, incorrect: 0, wordLeft: 7 };

//event listner
wordJumble.addEventListener("click", (e) => {
  wordJumble.style.display = "block";
});

btn1.addEventListener("click", (e) => {
  addScore();
  myWords.sort(() => {
    return 0.5 - Math.random();
  });
  game.sel = myWords.shift();
  //console.log(game.sel);
  questionDesc();
  question.style.display = "block";
  btn1.textContent.display = "none";
  restart.style.visibility = "visible";
  scoreBoard.style.display = "block";
  game.wordLeft = myWords.length;

  myInput.style.display = "inline";
  game.scramble = sorter(game.sel);
  swords.style.fontSize = "3rem";
  myInput.setAttribute("maxlength", game.sel.length);
  swords.textContent = `${game.scramble}`;
  console.log(swords);
  swords.style.color = "white";
  but1Div.style.display = "none";

  //console.log(game.sel, game.scramble);
});

//restart button
restart.addEventListener("click", (e) => {
  let tempOutput = `Score : 0 Attempt: 0 Word Left: ${myWords.length}`;
  scoreBoard.innerHTML = tempOutput;
});

btn2.addEventListener("click", (e) => {
  btn2.style.display = "none";
  myInput.disabled = false;
  myInput.value = "";
  myInput.style.borderColor = "black";
  myInput.style.borderWidth = "1px";
  myInput.style.color = "black";
  addScore();
  btn1.style.display = "none";
  scoreBoard.style.display = "block";
  myWords.sort(() => {
    return 0.5 - Math.random();
  });
  game.sel = myWords.shift();
  questionDesc();
  game.wordLeft = myWords.length;

  myInput.style.display = "inline";
  if (game.sel != undefined) {
    game.scramble = sorter(game.sel);
    swords.style.fontSize = "3rem";
    myInput.setAttribute("maxlength", game.sel.length);
    swords.textContent = `${game.scramble}`;
  } else {
    endGame();
  }

  console.log(game.sel, game.scramble);
});

myInput.addEventListener("keyup", (e) => {
  myInput.style.bordercolor = "#eee";
  if (
    (myInput.value.length == game.sel.length || e.code == "Enter") &&
    game.sel != undefined
  ) {
    wordChecker();
  } else {
    endGame;
  }
});

function wordChecker() {
  if (myInput.value.toUpperCase() == game.sel.toUpperCase()) {
    myInput.style.borderColor = "green";
    myInput.style.borderWidth = "10px";
    myInput.style.color = "white";
    console.log("Correct");
    game.score++;
    myInput.disabled = true;
    btn2.style.display = "block";
  } else {
    console.log("Correct");
    myInput.style.borderColor = "red";
    myInput.style.borderWidth = "10px";
    myInput.style.color = "red";
    //myInput.value = '';
    game.incorrect++;
  }
  addScore();
}

function addScore() {
  let tempOutput = `Score : ${game.score} Attempt: (${game.incorrect}) Word Left: ${game.wordLeft}`;
  scoreBoard.innerHTML = tempOutput;
}

function endGame() {
  myInput.style.display = "none";
  question.style.display = "none";
  swords.textContent = "";
  result.textContent = `Game Over!! 
    Score : ${game.score} Incorrect (${game.incorrect})`;
  result.style.color = "steelblue";
}

function sorter(val) {
  let temp = val.split("");
  temp.sort(() => {
    return 0.5 - Math.random();
  });
  temp = temp.join("");
  console.log(temp);
  if (val == temp) {
    return sorter(val);
  }
  return temp;
}

function questionDesc() {
  switch (game.sel) {
    case "Program":
      question.textContent = `The sequence of instructions is called __________ `;
      break;
    case "Encapsulation":
      question.textContent =
        "________ is a concept in OOP which hides unimportant implementation details from other objects.";
      break;
    case "Initialization":
      question.textContent = ` javac is a Java _______  which provides the keywords and syntax along with data types, operators that are used in Java.`;
      break;
    case "goto":
      question.textContent = ` Use of _____ statement creates an unconditional jump within program.
            `;
      break;
    case "switch":
      question.textContent = ` The _______ structure in Java consists of series of case keyword.
            `;
      break;
    case "Initialization":
      question.textContent = `____________ part of the loop  contains assignment of value to a  control variable.`;
      break;
    case "Condition":
      question.textContent = `__________ part of the loop is to test whether a boolean expression evaluates to true or false.`;
      break;
    case "Condition":
      question.textContent = `A ________ in Java starts with the key word class followed by a valid identifier. `;
      console.log(question.textContent);
      break;
  }
}

game2Butn.addEventListener("click", (e) => {
  window.open(
    "../GuessTheNumber.html",
    "popUpWindow",
    "height=1000,width=1000,left=100,top=100,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=no"
  );
});

restart.addEventListener("click", (e) => {
  window.location.reload();
});
