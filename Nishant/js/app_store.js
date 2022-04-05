let first = document.querySelector("#addfirst");
let second = document.querySelector("#addsecond");
let third = document.querySelector("#addthird");
let fourth = document.querySelector("#addfourth");

let cartItems = document.querySelector("#items");
cartCount = 0;
first.addEventListener("click", (e) => {
  tracker();
});

second.addEventListener("click", (e) => {
  tracker();
});

third.addEventListener("click", (e) => {
  tracker();
});

fourth.addEventListener("click", (e) => {
  tracker();
});

function tracker() {
  cartCount += 1;
  cartItems.innerText = cartCount;
}
