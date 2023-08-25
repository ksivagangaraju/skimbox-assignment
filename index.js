let addToCart = document.getElementById("addToCart");

addToCart.addEventListener("submit", (e) => {
  e.preventDefault();
});

let cart1 = document.getElementById("cart1");
let cart2 = document.getElementById("cart2");
let cart3 = document.getElementById("cart3");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let selectSize1 = document.getElementById("selectSize1");
let selectSize2 = document.getElementById("selectSize2");
let selectSize3 = document.getElementById("selectSize3");
let discountedPrice1 = document.getElementById("discountedPrice1");
let discountedPrice2 = document.getElementById("discountedPrice2");
let discountedPrice3 = document.getElementById("discountedPrice3");
let price = document.getElementById("price");

label2.classList.add("selected-cart");
selectSize1.classList.add("display-none");
selectSize3.classList.add("display-none");

cart1.addEventListener("change", () => {
  label1.classList.add("selected-cart");
  label2.classList.remove("selected-cart");
  label3.classList.remove("selected-cart");
  selectSize1.classList.add("display-block");
  selectSize2.classList.add("display-none");
  selectSize3.classList.add("display-none");
  selectSize1.classList.remove("display-none");
  selectSize2.classList.remove("display-block");
  selectSize3.classList.remove("display-block");
  let cartPrice = 195;
  let discount = 50;
  let originalPrice = cartPrice / (1 - discount / 100);
  let discountPrice = (originalPrice / 100) * discount;
  discountedPrice1.textContent = "DKK " + discountPrice.toFixed(2);
  discountedPrice2.textContent = "";
  discountedPrice3.textContent = "";
  price.textContent = "DKK " + cartPrice.toFixed(2);
});

cart2.addEventListener("change", () => {
  label1.classList.remove("selected-cart");
  label2.classList.add("selected-cart");
  label3.classList.remove("selected-cart");
  selectSize1.classList.add("display-none");
  selectSize2.classList.add("display-block");
  selectSize3.classList.add("display-none");
  selectSize1.classList.remove("display-block");
  selectSize2.classList.remove("display-none");
  selectSize3.classList.remove("display-block");
  let cartPrice = 345;
  let discount = 40;
  let originalPrice = cartPrice / (1 - discount / 100);
  let discountPrice = (originalPrice / 100) * discount;
  discountedPrice1.textContent = "";
  discountedPrice2.textContent = "DKK " + discountPrice.toFixed(2);
  discountedPrice3.textContent = "";
  price.textContent = "DKK " + cartPrice.toFixed(2);
});

cart3.addEventListener("change", () => {
  label1.classList.remove("selected-cart");
  label2.classList.remove("selected-cart");
  label3.classList.add("selected-cart");
  selectSize1.classList.add("display-none");
  selectSize2.classList.add("display-none");
  selectSize3.classList.add("display-block");
  selectSize1.classList.remove("display-block");
  selectSize2.classList.remove("display-block");
  selectSize3.classList.remove("display-none");
  let cartPrice = 528;
  let discount = 60;
  let originalPrice = cartPrice / (1 - discount / 100);
  let discountPrice = (originalPrice / 100) * discount;
  discountedPrice1.textContent = "";
  discountedPrice2.textContent = "";
  discountedPrice3.textContent = "DKK " + discountPrice.toFixed(2);
  price.textContent = "DKK " + cartPrice.toFixed(2);
});
