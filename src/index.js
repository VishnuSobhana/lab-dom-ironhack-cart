// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price");
  const quantity = product.querySelector(".quantity");

  const valueOfPrice = price.querySelector(".price span");
  const valueOfQuantity = quantity.querySelector("input").value;

  let subtotal = 0;

  subtotal = Number(valueOfPrice.textContent * valueOfQuantity);
  let showSubtotal = product.querySelector(".subtotal > span");

  return (showSubtotal.textContent = subtotal);
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let allProduct = document.querySelectorAll(".product");

  allProduct.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  //... your code goes here
  let priceTotal = document.querySelector("#total-value span");

  let counter = 0;
  allProduct.forEach((product) => {
    counter += updateSubtotal(product);
  });

  priceTotal.textContent = counter;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest("tr").remove();

  calculateAll();
}
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
