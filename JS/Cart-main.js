// chatgpt help me to correct some parts of thic code they will be mark with a *

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cart-container");
  if (!container) return;

  function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty :( </p>";
      return;
    }
    //*
    cart.forEach((item, index) => {
      container.innerHTML += `
      <div class="cart-item">
      <img src="${item.image}" class="cart-img">
       <div class="cart-info">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>

    <button class="remove-btn" data-index="${index}">X</button>
  </div>
`;
    });
  }
  //*
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = e.target.dataset.index;

      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    }
  });

  displayCart();
});
