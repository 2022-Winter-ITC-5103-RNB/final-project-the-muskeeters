const userNames = [
  "Optimus Prime",
  "BumbleBee",
  "Cliff Jumper",
  "Ratchet",
  "Alpha Trion",
  "Megatron",
  "Shockwave",
  "Soundwave",
  "Galvatron",
];

let button = document.querySelector("#button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let randomUser = userNames[Math.floor(Math.random() * userNames.length)];
  let text = document.querySelector("#textbox").value;
  let tag = document.createElement("p");
  let textBox = document.createTextNode(randomUser + ": \n\n" + text);
  tag.appendChild(textBox);
  let element = document.querySelector("#comment-area");
  element.appendChild(tag);
  document.querySelector("#textbox").value = "";
});

button.addEventListener("keypress", function (event) {
  event.preventDefault();
  if (event.key === "Enter") {
    let randomUser = userNames[Math.floor(Math.random() * userNames.length)];
    let text = document.querySelector("#textbox").value;
    let tag = document.createElement("p");
    let textBox = document.createTextNode(randomUser + ": \n\n" + text);
    tag.appendChild(textBox);
    let element = document.querySelector("#comment-area");
    element.appendChild(tag);
    document.querySelector("#textbox").value = "";
  }
});
