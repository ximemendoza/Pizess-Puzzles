document.addEventListener("DOMContentLoaded", () => {
  //chatgpt recomended to write it like this
  const addButton = document.querySelector(".cart-main");

  addButton.addEventListener("click", () => {
    const name = document.querySelector(".produt-name-des1").innerText;
    const price = document.querySelector(".product-p-d").innerText;
    const image = document.querySelector(".product-main-1").src;

    const product = {
      name: name,
      price: price,
      image: image,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!! :)");
  });
});
