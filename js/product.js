//Variables
const plussBtn = document.querySelector("#btn-plus");
const minusBtn = document.querySelector("#btn-minus");
const quantity = document.querySelector("#btn-quantity");

// Change quantity
let quantityValue = parseInt(quantity.value);

function valueUp() {
  if (quantityValue < 9) {
    quantityValue = quantityValue + 1;
    console.log(quantityValue);
    quantity.innerHTML = quantityValue;
  }
}

function valueDown() {
  if (quantityValue > 1) {
    quantityValue = quantityValue - 1;
    quantity.innerHTML = quantityValue;
  }
}

plussBtn.addEventListener("click", valueUp);
minusBtn.addEventListener("click", valueDown);
