const menuHide2 = document.getElementById("hideMenu2");
const menuShow2 = document.getElementById("showMenu2");
const navBar2 = document.getElementById("menubar2");

menuHide2.style.display = "none";

function showMenu2(){
    navBar2.style.top = "3.8em";
    menuShow2.style.display = "none";
    menuHide2.style.display = "block";

}

function hideMenu2(){
    navBar2.style.top = "";
    menuShow2.style.display = "block";
    menuHide2.style.display = "none";
}

function showCart2(){
    cartPage.style.display = "flex"
}
function hideCart(){
    cartPage.style.display = "none"
}







const buttons = document.querySelector('.buttons')
const productsInCart = document.getElementById('categorySection');



buttons.addEventListener("click", changeCategory );
function changeCategory(e){
    console.log(e.target);
   
    const selectedButton = e.target;
    const selected = selectedButton.classList[0];
    
    const boxModel = document.getElementsByClassName("boxModel");
    const grill = document.getElementsByClassName("grill");
    const soup = document.getElementsByClassName("soup");
    const healthy = document.getElementsByClassName("healthy");
    const groc = document.getElementsByClassName("groc");


    for(let i=0; i<boxModel.length; i++){
        boxModel[i].style.display = "none";
    }

    switch(selected){
        case "all":
            console.log("all Catege")
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            }
            break;
        case "grill":
            console.log("grill catege")
            for(let i=0; i<grill.length; i++){
                grill[i].style.display = "block";
            }
            break;
        case "soup":
            console.log("soup catege")
            for(let i=0; i<soup.length; i++){
                soup[i].style.display = "block";
            }
            break; 
        case "healthy":
            console.log("healthy catege")
            for(let i=0; i<healthy.length; i++){
                healthy[i].style.display = "block";
            }
            break; 
        case "groc":
            console.log("groceries catege")
            for(let i=0; i<groc.length; i++){
                groc[i].style.display = "block";
            }
            break;   
        default:
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            };
    }
   
}


// productsInCart.addEventListener("click", addToCart);

const addToCart = document.getElementsByClassName('cartBtn');


for (var i = 0; i < addToCart.length; i++) {
  var button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
    button = event.target;
    var cartItem = button.parentElement;
    var title = cartItem.getElementsByClassName('foodTitle')[0].innerText;
    console.log(title);
    var price = cartItem.getElementsByClassName('foodPrice')[0].innerText;
    console.log(price);
    var imageSrc = cartItem.getElementsByClassName('itemImage')[0].src;
    console.log(imageSrc);
    
    
    addItemToCart (price, imageSrc);
    updateCartPrice()
}



function addItemToCart (price, imageSrc) {
    
    button = event.target;
    var cartItem = button.parentElement;
    var title = cartItem.getElementsByClassName('foodTitle')[0].innerText;
    console.log(title);
    var price = cartItem.getElementsByClassName('foodPrice')[0].innerText;
    console.log(price);
    var imageSrc = cartItem.getElementsByClassName('itemImage')[0].src;
    console.log(imageSrc);
    
    var productRow = document.createElement('div');
    productRow.classList.add('cartBox');
    var productRows = document.getElementsByClassName('cartModel')[0];
    var cartImage = document.getElementsByClassName('cartImage');

    
    
    for (var i = 0; i < cartImage.length; i++){
      if (cartImage[i].src == imageSrc){
        alert ('This item has already been added to the cart')
        return;
      }
    }
    
    var cartRowItems = `
    <div class="cartBox" id="cartBox">
    <div class="cartItem" id="cartItem">
        <div class="cartImage" id="cartImage">
            <div class="foodOverlay"></div>
            <img src="${imageSrc}"  alt="" class="cartImage">
        </div>
        <div class="cartItem2" id="cartItem2">
            <div class="cartTitle" id="cartTitle">
                <h1> ${title}</h1>
                <h2 class ="cartPrice"><span>${price}</span></h2>
                <button class="cancel"><i class="fas fa-times"></i></button>
            </div>
            <div class="cartOption" id="cartOption">
               <input class="itemNumber" type="number" value="1">
            </div>
        </div>
        
    </div>
   
</div>
          
        `
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('cancel')[0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('itemNumber')[0].addEventListener('change', changeQuantity)
    updateCartPrice()
}

const removeBtn = document.getElementsByClassName('cancel');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

var quantityInput = document.getElementsByClassName('itemNumber')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
  

function updateCartPrice() {
    var total = 0
    for (var i = 0; i < productRow.length; i += 2) {
      cartRow = productRow[i]
    var priceElement = cartRow.getElementsByClassName('cartPrice')[0]
    var quantityElement = cartRow.getElementsByClassName('itemNumber')[0]
    var deliveryFee = cartRow.getElementsByClassName('delivery')[0]
    var price = parseFloat(priceElement.innerText.replace('NGN', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity ) + deliveryFee;
      
    }
    document.getElementsByClassName('totalPrice')[0].innerText =  'NGN' + total
  
  document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}