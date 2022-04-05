let score = 0;
let submitButton = document.querySelector("#submit");
let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");
let q4 = document.querySelector("#q4");
let q5 = document.querySelector("#q5");
let q6 = document.querySelector("#q6");
let q7 = document.querySelector("#q7");
let q8 = document.querySelector("#q8");
let q9 = document.querySelector("#q9");
let q10 = document.querySelector("#q10");

let solution = {
  question1: ["q1o3", q1],
  question2: ["q2o3", q2],
  question3: ["q3o4", q3],
  question4: ["q4o3", q4],
  question5: ["q5o1", q5],
  question6: ["q6o4", q6],
  question7: ["q7o1", q7],
  question8: ["q8o2", q8],
  question9: ["q9o1", q9],
  question10: ["q10o3", q10],
};

submitButton.addEventListener("click", (e) => {
  document.querySelector("#score").innerHTML = "";
  score = 0;
  queryUserInput("question1");
  queryUserInput("question2");
  queryUserInput("question3");
  queryUserInput("question4");
  queryUserInput("question5");
  queryUserInput("question6");
  queryUserInput("question7");
  queryUserInput("question8");
  queryUserInput("question9");
  queryUserInput("question10");
  scoreDisplay();
});

function queryUserInput(question) {
  let rates = document.getElementsByName(question);
  let rate_value;
  for (let i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      rate_value = rates[i].value;
      score++;
    }
    if (rate_value === solution[question][0]) {
      solution[question][1].style.backgroundColor = "#60d394";
    } else {
      solution[question][1].style.backgroundColor = "#ee6055";
    }
  }
}

function scoreDisplay() {
  let scoreTag = document.querySelector("#score");
  let sc = document.createElement("h1");
  let text = `You have scored: ${score} out of 10`;
  var textNode = document.createTextNode(text);
  sc.appendChild(textNode);
  scoreTag.appendChild(sc);
}
