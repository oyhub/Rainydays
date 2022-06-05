//Basic variables
baseUrl = "https://ballarimedia.no/portfolio/wp-json/wc/store/v1/products";
const urlKey = "ck_da178aed413ef7ad085467fb0c8658c9bdcc0c4c";
const urlSec = "cs_5e57f946c307554785b15d7b5db7bdadebdc5552";
const url = baseUrl + "?consumer_key=" + urlKey + "&consumer_secret=" + urlSec;

//Site Variables
const listJackets = document.querySelector(".listofjackets");
const featured = document.querySelector(".container");
const h2Heading = document.querySelector(".latest-h2-heading");
const latest = document.querySelector(".latest");
const headFilter = document.querySelector(".headfilter");
const loader = document.querySelector(".loader");

let items = [];
const sortFilter = document.querySelector("#sort");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    loader.style.display = "none";
    headFilter.style.display = "block";
    listJackets.style.display = "grid";
    listJackets.innerHTML = "";

    //Create Array
    for (let i = 0; i < results.length; i++) {
      items.push(results[i]);
    }

    //Array standard - sorted by name
    function sortByName(items) {
      items.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    sortByName(items);

    //Create page
    function pageLayout(items) {
      console.log("hei2");

      listJackets.innerHTML = "";
      for (let i = 0; i < items.length; i++) {
        listJackets.innerHTML += createCard(items[i]);
      }
    }
    pageLayout(items);

    //Featured products
    function latestProducts(items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].featured) {
          h2Heading.style.display = "block";
          featured.innerHTML += createCard(items[i]);
        }
      }
    }
    latestProducts(items);

    //Sort results
    sortFilter.addEventListener("change", testFunction);

    function testFunction() {
      if (event.target.value === "low2high") {
        items.sort(function (a, b) {
          return a.price - b.price;
        });
        pageLayout(items);
      } else if (event.target.value === "high2low") {
        items.sort(function (a, b) {
          return b.price - a.price;
        });
        pageLayout(items);
      } else if (event.target.value === "name") {
        sortByName(items);
        pageLayout(items);
      }
    }
    console.log(items);

    //Filter Items
    const rainJacket = document.querySelector("#rainjacket");
    const windJacket = document.querySelector("#windjacket");
    const indoor = document.querySelector("#indoor");
    let filteredItems = [];
    //
    function filterFunction(event) {
      if (event.target.checked) {
        for (let i = 0; i < items.length; i++) {
          if (filteredItems.id.includes(items[i].id)) {
            continue;
          } else {
            items[i].categories.forEach((element) => {
              if (element.id === 28) {
                filteredItems.push(items[i]);
              }
            });
          }
        }
      } else if (!event.target.checked) {
        for (let i = filteredItems.length - 1; i > -1; i--) {
          filteredItems[i].categories.forEach((element) => {
            if (element.id === 28) {
              filteredItems.splice(i, 1);
            }
          });
        }
      }
      console.log(filteredItems);
    }
    /*     function filterFunction(event) {
      const catValue = parseInt(event.target.value);

      if (event.target.checked) {
        for (let i = 0; i < items.length; i++) {
          items[i].categories.forEach((element) => {
            if (element.id === catValue) {
              filteredItems.push(items[i]);
            }
          });
        }
      } else if (!event.target.checked) {
        for (let i = filteredItems.length - 1; i > -1; i--) {
          filteredItems[i].categories.forEach((element) => {
            if (element.id === catValue) {
              filteredItems.splice(i, 1);
            }
          });
        }
      }
      console.log(filteredItems);
    } */
    //
    rainJacket.addEventListener("click", filterFunction);
    windJacket.addEventListener("click", filterFunction);
    indoor.addEventListener("click", filterFunction);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

//Show & Hide filter
const filterContainer = document.querySelector(".filter");
const filterIcon = document.querySelector(".filtericon");
const filterDiv = document.querySelector(".filter-div");

filterIcon.addEventListener("click", function () {
  if (filterDiv.classList.contains("hide-filter")) {
    filterDiv.classList.remove("hide-filter");
  } else {
    filterDiv.classList.add("hide-filter");
  }
});

console.log(url);
