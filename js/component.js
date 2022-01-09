//Check length
function chechkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

//Validate email
function validateEmail(email) {
  const regExEmail = /\S+@\S+\.\S+/;
  const patternMatch = regExEmail.test(email);
  return patternMatch;
}

//Validate MM/YY on cards
function validateDate(date) {
  const regExDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  const patternMatch = regExDate.test(date);
  return patternMatch;
}

//Validate CVC
function validateCvc(cvc) {
  const regExCvc = /^[0-9]{3}$/;
  const patternMatch = regExCvc.test(cvc);
  return patternMatch;
}

//Validate Creditcard
function validateCard(card) {
  const regExCard = /^[0-9]{16}$/;
  const patternMatch = regExCard.test(card);
  return patternMatch;
}
