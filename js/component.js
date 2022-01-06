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
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
