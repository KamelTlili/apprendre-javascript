fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) =>
  {
  const products =data;
  const select = document.getElementById("items");
  console.log(select);
  for (const key in products) {
   let cards =  ` <a href="./product.html?id= ${products[key]._id}">
   <article>
     <img src=" ${products[key].imageUrl}" alt="${products[key].altTxt}">
     <h3 class="productName">${products[key].name}</h3>
     <p class="productDescription">${products[key].description}</p>
   </article>
 </a>`;
     select.innerHTML+=cards;}
   }
  );