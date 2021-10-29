// store variable
let productContainer = document.querySelector(".product__container"),
  totalPrice = document.querySelector(".total__price"),
  productItem = "",
  showNumber = document.querySelector("#showNumber"),
  selectedProducts = [],
  cartContainers = document.querySelector(".cart__container"),
  subTotal = 0.0;

// data
const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Desktop",
    price: 53000,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "laptop",
    price: 35000,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1099&q=80",
    name: "watch",
    price: 1400,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1530263503756-b382295fd927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Cycle",
    price: 24000,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80",
    name: "television",
    price: 19000,
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Motorcycle",
    price: 200000,
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
    name: "Mobile",
    price: "24000",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1585314614250-d213876625e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80",
    name: "keyboard",
    price: 550,
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
    name: "Mouse",
    price: 400,
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Headphone",
    price: 2500,
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1542908945-2d06f969cc61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80",
    name: "Camera",
    price: 39000,
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1625886390251-01af1ea39853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    name: "Pendrive",
    price: 700,
  },
];

// load data on Display
data.map((item, index) => {
  productItem += `
  <div class="product__item">
    <div class="product__image">
      <img src='${item.img}' >
    </div>
    <div class="product__content">
      <h3>${item.name}</h3>
      <div class="product__footer">
        <button onclick="addToCart(${
          index + "," + item.id
        })">ADD to cart</button>
        <span>৳ ${item.price}</span>
      </div>
    </div>
  </div>
  `;
});

productContainer.innerHTML = productItem;

// add To cart
function addToCart(index, id) {
  let is_exists = false;

  let product = {
    name: data[index].name,
    price: data[index].price,
    id: data[index].id,
    quantity: 1,
  };

  selectedProducts.map((item) => {
    if (item.id === id) {
      item.quantity++;
      is_exists = true;
    }
  });

  if (!is_exists) {
    selectedProducts.push(product);
  }

  showNumber.innerHTML = selectedProducts.length;
  updateDisplay();
}

// Remove a item from 'selectedProducts' array
function removeFromCart(index, id) {
  selectedProducts.splice(index, 1);
  updateDisplay();
}

function updateDisplay() {
  let cartItem = "";
  selectedProducts.map((product, i) => {
    if (product.quantity > 0) {
      subTotal += product.price * product.quantity;
      cartItem += `
        <div class="cart__item">
          <p>${product.name}</p>
          <p>(${product.price})</p>
          <div class="cart__quantity">
            <span onclick="decreaseFromCart(${i + "," + product.id})">-</span>
            <input type="number" value=${product.quantity}>
            <span onclick="increaseFromCart(${i + "," + product.id})">+</span>
          </div>
          <button class="remove__cart" onclick="removeFromCart(${
            i + "," + product.id
          })">X</button>
          <p>৳ ${product.price * product.quantity}</p>
        </div>`;
    }
  });
  cartContainers.innerHTML = cartItem;
  totalPrice.innerHTML = `Total Price: ৳ ${subTotal}`;
}

function clearAll() {
  selectedProducts = [];

  updateDisplay();
}

// Decrease quantity from cart
function decreaseFromCart(index, id) {
  selectedProducts[index].quantity--;

  updateDisplay();
}

// increase quantity from cart
function increaseFromCart(index, id) {
  selectedProducts[index].quantity++;

  updateDisplay();
}

// Modal Box ======================================================
var modal = document.getElementById("myModal");
var cart = document.getElementById("cart");
var span = document.getElementsByClassName("close")[0];
cart.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
console.log(selectedProducts);
