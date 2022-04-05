const form = document.getElementById("form");
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const countrycode = document.getElementById("countrycode");
const phone = document.getElementById("phoneno");
const email = document.getElementById("email");
const message = document.getElementById("message");
const comm = document.getElementById("comm");
const submit = document.querySelector("#submitbut");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!checkInputs()) {
  } else {
    alert.style.visibility = "visible";
    fname.value = "";
    lname.value = "";
    email.value = "";
    countrycode.value = "";
    phone.value = "";
    message.value = "";
  }
});

function checkInputs() {
  var errors = true;
  // trim to remove the whitespaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const countrycodevalue = countrycode.value.trim();
  const phonevalue = phone.value.trim();
  const messageValue = message.value.trim();

  /*   console.log(fnameValue);
  console.log(lnameValue);
  console.log(emailValue);
  console.log(countrycodevalue);
  console.log(phonevalue);
  console.log(messageValue); */
  if (fnameValue === "") {
    fname.style.borderColor = "red";
    errors = false;
  }

  if (lnameValue === "") {
    lname.style.borderColor = "red";
    errors = false;
  }
  if (emailValue === "") {
    email.style.borderColor = "red ";
    errors = false;
  } else if (!isEmail(emailValue)) {
    email.placeholder = "Email not valid";
    email.style.borderColor = "red ";
    errors = false;
  }
  //   } else {
  //     setSuccessFor(email);
  //   }

  if (countrycodevalue === "") {
    countrycode.style.borderColor = "red";
    errors = false;
  }

  if (phonevalue === "") {
    phone.style.borderColor = "red";
    errors = false;
  } else if (!isPhonenumber(phonevalue)) {
    console.log("Enter valid phone Number");
    phone.value = "";
    phone.placeholder = "phone Number not valid";
    phone.style.borderColor = "red";
    errors = false;
  }

  if (messageValue === "" || messageValue == null) {
    message.style.borderColor = "red";
    message.placeholder = "Enter the Query here";
    errors = false;
  } /* else {
    setSuccessFor(message);
  } */
  return errors;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhonenumber(phonenumber) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phonenumber.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}
