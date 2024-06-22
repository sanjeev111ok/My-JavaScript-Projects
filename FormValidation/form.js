const form = document.querySelector("#form");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirmation = document.querySelector(
  "#password-confirmation"
);
const termsInput = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];
  clearErrors();

  if (inputUsername.value.length < 6) {
    errorMessages.push("Username must be of at least 6 characters");
  }
  if (inputPassword.value.length < 8) {
    errorMessages.push("Password must be of at least 8 characters");
  }

  if (inputPasswordConfirmation.value !== inputPassword.value) {
    errorMessages.push("You must confirm your password");
  }

  if (!termsInput.checked) {
    errorMessages.push("please check and agree to the terms");
  }

  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
  console.log(errorMessages);
});

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
  errorsContainer.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
}
