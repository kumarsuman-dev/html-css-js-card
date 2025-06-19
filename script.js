const product = {
  name: "OnePlus Nord Buds",
  sprice: "₹2,799",
  rating: 4.5,
  image: "img/2.png",
};

function updateCard(product) {
  document.getElementById("name").textContent = product.name;
  document.getElementById("sprice").textContent = product.sprice;

  let stars = "Rating: ";
  for (let i = 1; i <= 5; i++) {
    stars += i <= Math.floor(product.rating) ? "★" : "☆";
  }

  document.getElementById("rating").textContent = stars;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
}

function changeImage(newImage) {
  document.getElementById("product-image").src = newImage;
}

document.getElementById("add-to-cart").addEventListener("click", function () {
  alert(`${product.name} has been added to your cart!`);
});

document.getElementById("buy-now").addEventListener("click", function () {
  alert(`Proceed to purchase ${product.name}!`);
});

document.getElementById("wishlist").addEventListener("click", function () {
  alert(`${product.name} has been added to your wishlist!`);
});

// On page load
updateCard(product);
