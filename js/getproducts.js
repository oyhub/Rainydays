const baseUrl = "https://www.ballarimedia.no/rainydays/wp-json/wc/v3/products";
const urlKey = "ck_da178aed413ef7ad085467fb0c8658c9bdcc0c4c";
const urlSec = "cs_5e57f946c307554785b15d7b5db7bdadebdc5552";
const listJackets = document.querySelector(".listofjackets");
const featured = document.querySelector(".container");
const h2Heading = document.querySelector(".latest-h2-heading");
const latest = document.querySelector(".latest");
const headFilter = document.querySelector(".headfilter");
const loader = document.querySelector(".loader");

const url = baseUrl + "?consumer_key=" + urlKey + "&consumer_secret=" + urlSec;

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    loader.style.display = "none";
    headFilter.style.display = "block";
    listJackets.style.display = "grid";
    listJackets.innerHTML = "";
    //
    let sortResults = results.sort();
    //
    for (let i = 0; i < sortResults.length; i++) {
      listJackets.innerHTML += createCard(sortResults[i]);

      if (sortResults[i].featured) {
        h2Heading.style.display = "block";
        featured.innerHTML += createCard(sortResults[i]);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
