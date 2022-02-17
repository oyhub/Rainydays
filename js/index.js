//Base variables
const baseUrl = "https://www.ballarimedia.no/rainydays/wp-json/wc/v3/products";
const urlKey = "?consumer_key=ck_da178aed413ef7ad085467fb0c8658c9bdcc0c4c";
const urlSec = "&consumer_secret=cs_5e57f946c307554785b15d7b5db7bdadebdc5552";
const url = baseUrl + urlKey + urlSec;

//Site variables
const latestSection = document.querySelector("#latest-homepage");
const latestContainer = document.querySelector(".latest-container");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      if (results[i].featured) {
        latestSection.style.display = "block";
        latestContainer.innerHTML += createCard(results[i]);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
