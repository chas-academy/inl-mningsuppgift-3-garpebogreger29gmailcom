const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let cart = [];

addButton.addEventListener("click", addProduct);

function addProduct() {
  const productName = productInput.value;
  const productPrice = Number(priceInput.value);

  if (productName !== "" && productPrice > 0) {
    let itemFound = false;

    for (let item of cart) {
      if (item.productName === productName) {
        item.quantity++;
        itemFound = true;
        break;
      }
    }

    if (!itemFound) {
      const newItem = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1
      };
      cart.push(newItem);
    }

    productInput.value = "";
    priceInput.value = "";

    updateCart();
  }
}

function updateCart() {
  cartList.innerHTML = "";

  for (let item of cart) {
    const li = document.createElement("li");
    li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`;
    cartList.appendChild(li);
  }
}