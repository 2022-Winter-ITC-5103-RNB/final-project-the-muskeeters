const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const form1 = document.getElementById("form1");
const email = document.getElementById("email1");
const password = document.getElementById("pass1");

const form2 = document.getElementById("form");
const userName = document.getElementById("userName");
const email2 = document.getElementById("email2");
const password2 = document.getElementById("pass2");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputsSignUp();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

const validateInputsSignUp = () => {
  const emailValue2 = email2.value.trim();
  const passwordValue2 = password2.value.trim();
  const usernameValue = userName.value.trim();

  if (emailValue2 === "") {
    setError(email2, "Email is required");
  } else if (!isValidEmail(emailValue2)) {
    setError(email2, "Provide a valid email address");
  } else {
    setSuccess(email2);
  }

  if (passwordValue2 === "") {
    setError(password2, "Password is required");
  } else if (passwordValue2.length < 8) {
    setError(password2, "Password must be at least 8 character.");
  } else {
    setSuccess(password2);
  }

  if (usernameValue === "") {
    setError(userName, "Username is required");
  } else {
    setSuccess(userName);
  }
};
