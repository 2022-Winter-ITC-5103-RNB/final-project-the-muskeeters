const form = document.getElementById("form");
let comment = document.getElementById("userComment");
let user = [
  "mike",
  " Brain",
  "Brandom",
  "Donald",
  "Danton",
  "Jabo",
  "Tommy Shelby",
  "Tony Stark",
  "Solo Rider",
  "Maa",
];

/*post.addEventListener("submit", (e) => {
  e.preventDefault();
  let commentBoxValue = document.getElementById("userComment-box").value;

  let li = document.createElement("li");
  let text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
});*/

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let commentBoxValue = comment.value.trim();
  console.log(commentBoxValue);
  if (commentBoxValue != "") {
    let randomUser = Math.random();
    let li = document.createElement("li");
    let finalText =
      user[randomIntFromInterval(0, 9)] + ":      " + commentBoxValue;
    let text = document.createTextNode(finalText);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    comment.value = "";
  }
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
