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

//Create Card
function createCard(result, number = "") {
  const cardHtml = `        
    <div class="jacket jacket_${number}">
    <img src="${result.images[0].src}" alt="${result.images[0].alt}" />
    <h3>${result.name}</h3>
    ${result.short_description}
    <div class="stars">
      <p>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
      </p>
    </div>
    <p class="price">${result.price},-</p>
    <a href="item.html?id=${result.id}" class="jacket-target" aria-label="${result.name}"></a>
  </div>`;

  return cardHtml;
}

//Creaate Specification
function createSpecification(specInfo) {
  const specHtml = `
  <div>
    <p>${specInfo.name}:</p>
    <p class="light">${specInfo.options[0]}</p>
  </div>
`;

  return specHtml;
}
