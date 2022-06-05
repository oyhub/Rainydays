//Base variables
const baseUrl = "https://ballarimedia.no/portfolio/wp-json/wc/store/v1/products";
//const urlKey = "?consumer_key=ck_da178aed413ef7ad085467fb0c8658c9bdcc0c4c";
//const urlSec = "&consumer_secret=cs_5e57f946c307554785b15d7b5db7bdadebdc5552";
const featured = "?featured=true";
const url = baseUrl + featured; //+ urlKey + urlSec;

//Site variables
const latestSection = document.querySelector("#latest-homepage");
const latestContainer = document.querySelector(".latest-container");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);

      if (results[i]) {
        latestSection.style.display = "block";
        latestContainer.innerHTML += createCard(results[i]);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
