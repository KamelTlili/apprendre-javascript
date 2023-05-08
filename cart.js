const local = JSON.parse(localStorage.getItem("product"));
h2.textContent=`${local.title}`
colors.textContent=`${local.colors}`
price.textContent=`${local.price}`
quantity.textContent=`${local.quantity}`
// image.textContent=`${local.imageUrl}`
// console.log(local.title);
// title.innerHTML=local.title;
// price.innerHTML=local.price;
// colors.innerHTML=local.colors;
// image.innerHTML=local.imageUrl;
// quantity.innerHTML=local.quantity;

const img = document.getElementById("image");
  img.src = local.image;
//   ////////////////////////////////////
// Get the cart data from local storage
const cart = JSON.parse(localStorage.getItem("product"));

// Calculate the total price
let totalPrice = 0;

  totalPrice = price.textContent* quantity.textContent;


const totalElement = document.getElementById("totalQuantity");
totalElement.textContent = `${local.quantity} articles): €${totalPrice}`;
// .toFixed(2)
const deleteButton = document.querySelector(".deleteItem");

deleteButton.addEventListener("click", () => {
  localStorage.clear();
  document.location.reload();
});



////////////////////////////////:::
// commande

order.addEventListener("click", () => {
 alert("Commande passée avec succès !");
// Créer une instance de jsPDF



 
});
// Install jsPDF library
// npm install jspdf

// Import jsPDF library
