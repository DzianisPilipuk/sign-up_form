const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("tel");
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("confirmPwd");
const form = document.getElementById("form");

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll("small");
  errorMessages.forEach((e) => {
    e.innerText = "";
  });
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText += message;
}

function submitForm() {
  const accountCreatedScreen = document.querySelector(
    ".account-created-screen",
  );
  accountCreatedScreen.style.visibility = "visible";

  setTimeout(() => {
    accountCreatedScreen.style.visibility = "hidden";
    form.submit();
  }, 1500);
}

function checkPasswords() {
  clearErrorMessages();
  let result = true;
  if (firstName.value === "") {
    setErrorFor(firstName, "field cannot be empty\n");
    result = false;
  }
  if (lastName.value === "") {
    setErrorFor(lastName, "field cannot be empty\n");
    result = false;
  }
  if (!email.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    setErrorFor(email, "• wrong email\n");
    result = false;
  }
  if (
    !phoneNumber.value.match(
      /^(\+[(]?[0-9]{1,3}[)]?[-\s.]?)?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,4}$/,
    )
  ) {
    setErrorFor(phoneNumber, "• wrong number\n");
    result = false;
  }
  if (password.value.length < 8) {
    setErrorFor(password, "• password length must be at least 8 symbols\n");
    result = false;
  }
  if (!password.value.match(/[#?!@$ %^&*-]/)) {
    setErrorFor(
      password,
      "• password needs to contain special special symbols #?!@$ %^&*-\n",
    );
    result = false;
  }
  if (!password.value.match(/[a-z]/)) {
    setErrorFor(
      password,
      "• password needs to contain at least one lower case letter\n",
    );
    result = false;
  }
  if (!password.value.match(/[A-Z]/)) {
    setErrorFor(
      password,
      "• password needs to contain at least one upper case letter\n",
    );
    result = false;
  }
  if (!password.value.match(/[0-9]/)) {
    setErrorFor(password, "• password needs to contain at least one digit\n");
    result = false;
  }
  if (confirmPassword.value !== password.value) {
    setErrorFor(confirmPassword, "• passwords need to match\n");
    result = false;
  }
  return result;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkPasswords()) {
    submitForm();
  }
});
