//Basic variables
const baseUrl = "https://ballarimedia.no/portfolio/wp-json/wc/store/v1/products";
const urlKey = "?consumer_key=ck_da178aed413ef7ad085467fb0c8658c9bdcc0c4c";
const urlSec = "&consumer_secret=cs_5e57f946c307554785b15d7b5db7bdadebdc5552";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const loader = document.querySelector(".loader");
const url = baseUrl + "/" + id; //+ urlKey + urlSec;
const url2 = baseUrl + urlKey + urlSec;

//Head Variables

const metaDesc = document.querySelector('meta[name="description"]');
const siteTitle = document.querySelector("title");

//Site Variables
const thisSite = document.querySelector(".this-site");
const jacketName = document.querySelector("h1");
const jacketDescription = document.querySelector(".jacket_description");
const jacketSpecification = document.querySelector(".specification");
const image = document.querySelectorAll(".item-image");
const listofjackets = document.querySelector(".listofjackets");
const whereOnSite = document.querySelector(".whereonsite");
const mainBody = document.querySelector(".jacketspecific");
const alsoLike = document.querySelector("#also-like-h2");

//Item spec
async function getItem() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    //Show page
    loader.style.display = "none";
    mainBody.style.display = "grid";
    whereOnSite.style.display = "flex";

    //Update Head
    const description = results.short_description;
    const printDescription = description.replace(/(<([^>]+)>)/gi, "");
    metaDesc.setAttribute("content", printDescription);

    siteTitle.innerHTML = `Rainydays | Women | ${results.name}`;

    //Update where on site
    thisSite.innerHTML = `<a href="item.html?id=${results.id}">${results.name}</a>`;

    //Update Jacket Info
    jacketName.innerHTML = results.name;
    jacketDescription.innerHTML = results.description.replace(/(<([^>]+)>)/gi, "");

    const attributes = results.attributes;
    console.log(attributes);

    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].name === "Size") {
        continue;
      }
      jacketSpecification.innerHTML += createSpecification(attributes[i]);
    }

    //Add image
    for (let i = 0; i < image.length; i++) {
      image[i].src = results.images[0].src;
      image[i].alt = results.images[0].alt;
    }

    //In stock
    const buttons = document.querySelectorAll(".btn_size");
    const stockDiv = document.querySelector(".testthis");

    function stockQuantity(element) {
      console.log(results);

      stockDiv.innerHTML = element.target.value;
    }

    buttons.forEach((element) => {
      element.addEventListener("click", stockQuantity);
    });
  } catch (error) {
    console.log(error);
  }
}
getItem();

//"You may also like"
async function getProducts() {
  try {
    const response = await fetch(url2);
    const results = await response.json();

    //Show H2
    alsoLike.classList.remove("hide-h2");

    for (let i = 0; i < 4; i++) {
      let number = i + 1;
      listofjackets.innerHTML += createCard(results[i], number);
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
