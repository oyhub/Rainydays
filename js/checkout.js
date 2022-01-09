const form = document.querySelector("#chekoutform");

//Input Variables
const email = document.querySelector("#email");
const confirmEmail = document.querySelector("#confirmemail");
const deliveryName = document.querySelector("#name");
const adress = document.querySelector("#adress");
const postalCode = document.querySelector("#postcode");
const city = document.querySelector("#city");
const payName = document.querySelector("#payname");
const cardNumber = document.querySelector("#card");
const cardDate = document.querySelector("#mmyy");
const cvc = document.querySelector("#cvc");

//Error Variables
const emailError = document.querySelector("#email_error");
const confirmEmailError = document.querySelector("#confirm-email-error");
const deliveryNameError = document.querySelector("#name-error");
const adressError = document.querySelector("#adress-error");
const postalError = document.querySelector("#postcode-error");
const cityError = document.querySelector("#city-error");
const payNameError = document.querySelector("#payname-error");
const cardNumberError = document.querySelector("#card-error");
const dateError = document.querySelector("#mmyy-error");
const cvcError = document.querySelector("#cvc-error");
const emailMatch = document.querySelector("#emails-do-not-match");

//Check Variables
const emailCheck = document.querySelector("#email-check");
const confirmEmailCheck = document.querySelector("#confirm-email-check");
const deliveryNameCheck = document.querySelector("#name-check");
const adressCheck = document.querySelector("#adress-check");
const postalCheck = document.querySelector("#postcode-check");
const cityCheck = document.querySelector("#city-check");
const payNameCheck = document.querySelector("#payname-check");
const cardNumberCheck = document.querySelector("#card-check");
const dateCheck = document.querySelector("#mmyy-check");
const cvcCheck = document.querySelector("#cvc-check");

//Validate Form

function validateForm() {
  event.preventDefault();

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateEmail(confirmEmail.value)) {
    confirmEmailError.style.display = "none";
  } else {
    confirmEmailError.style.display = "block";
  }

  if (chechkLength(deliveryName.value, 4)) {
    deliveryNameError.style.display = "none";
  } else {
    deliveryNameError.style.display = "block";
  }

  if (chechkLength(adress.value, 1)) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }

  if (chechkLength(postalCode.value, 3)) {
    postalError.style.display = "none";
  } else {
    postalError.style.display = "block";
  }

  if (chechkLength(city.value, 1)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }

  if (chechkLength(payName.value, 4)) {
    payNameError.style.display = "none";
  } else {
    payNameError.style.display = "block";
  }

  if (chechkLength(cardNumber.value, 11)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }

  if (validateDate(cardDate.value)) {
    dateError.style.display = "none";
  } else {
    dateError.style.display = "block";
  }

  if (validateCvc(cvc.value)) {
    cvcError.style.display = "none";
  } else {
    cvcError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

/* //Form ready to submit
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

form.addEventListener("keyup", isFormReady); */

//Remove Errormessages & Validation
function removeErrorMessage() {
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    emailCheck.style.display = "block";
  }

  if (validateEmail(confirmEmail.value)) {
    confirmEmailError.style.display = "none";
    confirmEmailCheck.style.display = "block";
  }

  if (chechkLength(deliveryName.value, 4)) {
    deliveryNameError.style.display = "none";
    deliveryNameCheck.style.display = "block";
  }

  if (chechkLength(adress.value, 1)) {
    adressError.style.display = "none";
    adressCheck.style.display = "block";
  }

  if (chechkLength(postalCode.value, 3)) {
    postalError.style.display = "none";
    postalCheck.style.display = "block";
  }

  if (chechkLength(city.value, 1)) {
    cityError.style.display = "none";
    cityCheck.style.display = "block";
  }

  if (chechkLength(payName.value, 4)) {
    payNameError.style.display = "none";
    payNameCheck.style.display = "block";
  }

  if (validateCard(cardNumber.value)) {
    cardNumberError.style.display = "none";
    cardNumberCheck.style.display = "block";
  }

  if (validateDate(cardDate.value)) {
    dateError.style.display = "none";
    dateCheck.style.display = "block";
  }

  if (validateCvc(cvc.value)) {
    cvcError.style.display = "none";
    cvcCheck.style.display = "block";
  }
}

form.addEventListener("keyup", removeErrorMessage);

//Email match
