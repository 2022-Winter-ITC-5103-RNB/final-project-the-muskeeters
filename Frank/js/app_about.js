let button = document.querySelector("#submit");
button.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = document.querySelector("#text").value;
  if (isEmail(userInput)) {
    let tag = document.createElement("p");
    let textBox = document.createTextNode(userInput + ", Welcome to the Band!");
    tag.appendChild(textBox);
    let element = document.querySelector("#comment-area");
    element.appendChild(tag);
    document.querySelector("#text").value = "";
    document.querySelector("#comment-area").style.backgroundColor = "cyan";
  } else {
    alert("Enter valid email");
  }
});

button.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let userInput = document.querySelector("#text").value;
    if (isEmail(userInput)) {
      let tag = document.createElement("p");
      let textBox = document.createTextNode(
        userInput + ", Welcome to the Band!"
      );
      tag.appendChild(textBox);
      let element = document.querySelector("#comment-area");
      element.appendChild(tag);
      document.querySelector("#textbox").value = "";
    } else {
      alert("Enter valid email");
    }
  }
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
