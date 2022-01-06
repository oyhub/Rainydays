//Variables
const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#name_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const topic = document.querySelector("#topic");
const topicError = document.querySelector("#topic_error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message_error");
const formReady = document.querySelector(".form-ready");
const nameCheck = document.querySelector("#name-check");
const emailCheck = document.querySelector("#email-check");
const topicCheck = document.querySelector("#topic-check");
const messageCheck = document.querySelector("#message-check");

//Validate Form
function validateForm() {
  event.preventDefault();

  if (chechkLength(fullName.value, 3)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (chechkLength(topic.value, 4)) {
    topicError.style.display = "none";
  } else {
    topicError.style.display = "block";
  }

  if (chechkLength(message.value, 29)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

//Form ready to submit
function isFormReady() {
  if (
    chechkLength(fullName.value, 3) &&
    chechkLength(topic.value, 4) &&
    chechkLength(message.value, 29) &&
    validateEmail(email.value)
  ) {
    formReady.style.display = "flex";
  }
}

//Remove Errormessages & Validation
function removeErrorMessage() {
  if (chechkLength(fullName.value, 3)) {
    fullNameError.style.display = "none";
    nameCheck.style.display = "block";
  }
  if (chechkLength(topic.value, 4)) {
    topicError.style.display = "none";
    topicCheck.style.display = "block";
  }
  if (chechkLength(message.value, 29)) {
    messageError.style.display = "none";
    messageCheck.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    emailCheck.style.display = "block";
  }
}
form.addEventListener("keyup", isFormReady);
form.addEventListener("keyup", removeErrorMessage);
