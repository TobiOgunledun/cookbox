



const menuHide = document.getElementById("hideMenu");
const menuShow = document.getElementById("showMenu");
const navBar = document.getElementById("menubar");
const theCart = document.getElementById("cart");
const foodImage = document.getElementsByClassName("foodImage");
const cartModel = document.getElementById("cartModel");
const cartPage = document.getElementById("cartPage");
const boxDesc = document.getElementsByClassName("boxDesc");
const theBody = document.getElementsByTagName("body")[0];

menuHide.style.display = "none";

function showMenu(){
    navBar.style.top = "3.8em";
    menuShow.style.display = "none";
    menuHide.style.display = "block";

}

function hideMenu(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
// window.onclick = function (e){
//     // console.log(e.target);
//     let close = e.target;

//     if(close.classList[0] === "welcome" ){
//         navBar.style.top = "";
//         menuShow.style.display = "block";
//         menuHide.style.display = "none";
//     }
// }


var sliderImages = document.getElementsByClassName("sliderImages");
let b = 0;

console.log(sliderImages);
// sliderImages.style.transform = "translateX(-100vw)";

// function imageSlider(){
//     for(b; b<sliderImages.length; b++){
//     sliderImages[b].style.transform = "translateX(-100vw)";
// }
//     console.log("we go'n be okay")
// }
// setInterval(imageSlider, 3000)



function navLink(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
function showCart(){
    cartPage.style.display = "flex"
}
function hideCart(){
    cartPage.style.display = "none"
}

var foodTitle = document.getElementsByClassName("foodTitle");
let i = 0;



function addCart(item){
    console.log("Hiiiii");
    for(let i=0; i<foodImage.length; i++){
        newImage = foodImage[i].src;
    }

    // for(let i=0; i<boxDesc.length; i++){

    //     newContent = boxDesc[i].innerHTML;
    //     console.log(newContent);
    // }
    for(i;i<foodTitle.length; i++){
    
        var newTitle = foodTitle[i].innerHTML;
        // console.log(mugu);
    }
console.log(newImage);

    


    const cartBox = document.createElement('div');
    cartBox.classList.add('cartBox');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

    const cartImage = document.createElement('div');
    cartImage.classList.add('cartImage');


    const cartOverlay = document.createElement('div');
    cartOverlay.classList.add('foodOverlay');

    const theImage = document.createElement('img');
    theImage.src = newImage;


    const secondCart = document.createElement('div');
    secondCart.classList.add('cartItem2');


    const cartTitle = document.createElement('div');
    // cartTitle.innerHTML = newContent;
    cartTitle.classList.add('cartTitle');

    const itemName = document.createElement('h1');
    itemName.innerHTML = newTitle;
    itemName.classList.add('itemName');


    const cartButton = document.createElement('button');
    cartButton.innerHTML = '<i class="fas fa-times"></i>';
    cartButton.setAttribute('onclick', 'removeCart()');

    const cartOption = document.createElement('div');
    
    const minusBtn = document.createElement('button');
         minusBtn.innerHTML = '<i class="fas fa-minus" id="itemMinus"></i>';
         minusBtn.setAttribute('onclick', 'decrement()');

        const cartOption2 = document.createElement('p');
        cartOption2.innerHTML = "1";
        cartOption2.classList.add('itemNumber')

        const plusBtn = document.createElement('button');
        plusBtn.innerHTML = '<i class="fas fa-plus" id="itemPlus"></i> ';
        plusBtn.setAttribute('onclick', 'increment()');

    cartOption.classList.add('cartOption');


    cartModel.appendChild(cartBox); //CHECKED

    cartBox.appendChild(cartItem); //CHECKED

    cartItem.appendChild(cartImage); //CHECKED
    cartItem.appendChild(secondCart); //CHECKED

    secondCart.appendChild(cartTitle);

    cartOption.appendChild(minusBtn);
    cartOption.appendChild(cartOption2);
    cartOption.appendChild(plusBtn);

   
    cartTitle.appendChild(cartButton);
    cartTitle.appendChild(itemName);


    secondCart.appendChild(cartTitle);
    secondCart.appendChild(cartOption);


    cartImage.appendChild(theImage); //CHECKED
    cartImage.appendChild(cartOverlay); //CHECKED
}



function removeCart(item){
    console.log("WTF!");  
    document.querySelector(".cartBox").remove(item);  

}

// const decrease = document.getElementById("itemMinus");

// decrease.addEventListener("click", decrement);
const itemNumber = document.getElementsByClassName(".itemNumber")[0];
console.log(itemNumber)
var x = 1;
function decrement(e){
    console.log("Help me!");
}
function increment(e){
    console.log("Okay, e dn leave me");
    let newItemNumb = x++;
    console.log(itemNumber.innerHTML);
   
}




