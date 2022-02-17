const testArray = [];

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    for (let i = 0; i < results.length; i++) {
      testArray.push(results[i]);
    }

    testArray.sort(function (a, b) {
      return b.price - a.price;
    });

    console.log(testArray);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
