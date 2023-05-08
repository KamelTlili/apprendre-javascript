


const urlpage=window.location.href;

// const { url } = require("inspector");

// console.log(urlpage);


let params = new URL(urlpage).searchParams;
let id=params.get("id"); 

  const  url ="http://127.0.0.1:3000/api/products/"+ id;


console.log(id);


// const produit=window.location.search.split("?").join("");
// console.log(produit);
let produitData= [ ];

const fetchProduit = async() => {
   await  fetch(`http://127.0.0.1:3000/api/products/${id}`.split(" ").join(""))
     .then((res)=>res.json())
     .then((promise) => {
    
          // console.log(promise);
          produitData=promise;
          console.log(produitData);
          
      });


  
// const produitDisplay=async()=>{
//    await fetchProduit();
//     document.getElementById("addToCart").innerHTML=`
//    <div id="cards${produitData._id}" class="cart__item">
//    <h3 class=cart__item__content__settings input cart__item__content>${produitData.name.toUpperCase()}</h3>  
//    <img class="item__img img" src="${produitData.imageUrl}" alt="image de ${produitData.name}"/>
//  </div> 
//  <p class="item__content__description ">${produitData.description}</p>
//  <div class="item__content__titlePrice p"> <p > ${produitData.price.toString()} euro</p></div>
//  <div>
//  <button id=${produitData._id}class=".item__content__addButton button ">Ajouter Panier</button>
//  </div>
//  `
 /////////////////////////////////////////////////////////////////////////////////
 console.log(produitData.imageUrl);

 image.innerHTML=`${produitData.imageUrl}`;
 document.getElementById("image").innerHTML=`

   <img class="image" src="${produitData.imageUrl}" alt="image de ${produitData.name}"/>`
  console.log(produitData.price);

   price.innerHTML=`${produitData.price}`;
  ////////////////////////////////////////////////////////////////////////////////
  console.log(produitData.description);

   description.innerHTML=`${produitData.description}`;

  

////////////////////////////////////////////////////////////////////////////////
let select=document.getElementById("colors");
console.log(select);
console.log(produitData.colors);
produitData.colors.forEach(colors=> {
    console.log(document.createElement("option")) ;
    let tagOption=document.createElement("option");
//  tagOption.innerHTML="bonjour";
//  tagOption.value="bonjour";
select.addEventListener("change", function() {
  // Récupérer la valeur sélectionnée
  var selectedValue = select.value;

  // Afficher la valeur sélectionnée dans la console
  console.log("Option sélectionnée : " + selectedValue);
 // Changer la source de l'image en fonction de la valeur sélectionnée
 switch (selectedValue) {
  case "red":
    image.src = "image_rouge.png";
    break;
  case "green":
    image.src = "image_vert.png";
    break;
  case "blue":
    image.src = "image_bleu.png";
    break;
  default:
    image.src = "";
    break;
}



});


    tagOption.innerHTML=`${colors}`;
    tagOption.value=`${colors}`;
//  pour indiquer ou on vas placer ce que tagoption etr lenfant de select
    select.appendChild(tagOption);
  
});
// ///////////////////////////////////////////
 




///////////////////////////////////////////////////////////////////////
};
fetchProduit();
//  produitDisplay();
 ///////////////////////////////////////////////////////////////
//  localStorage.setItem("cle","valeur")
//  localStorage.getItem("cle")
//  localStorage.clear();
// const local =JSON.parse(localStorage.getItem("product"));

addToCart.onclick=()=>{
  // localStorage.setItem("title",`${produitData.name}`);
  // localStorage.setItem("price",`${produitData.price}`);
  // localStorage.setItem("colors",`${produitData.colors}`);
  // localStorage.setItem("image",`${produitData.imageUrl}`);
  // localStorage.setItem("quantity",quantity.value);
  const product={
    _id:`${produitData._id}`,
    title:`${produitData.name}`,
    price:`${produitData.price}`,
    colors:`${produitData.colors}`,
    image:`${produitData.imageUrl}`,
    quantity:quantity.value
  }
  localStorage.setItem("product",JSON.stringify(product));
  document.location.reload();
}