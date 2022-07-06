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




var myIndex = 0;
		carousel()

function carousel(){
	var i;
	var x = document.getElementsByClassName('sliderImages');
	for(i=0;i<x.length;i++){
		x[i].style.display = "none";
	}
	myIndex++;
	if(myIndex > x.length){
		myIndex = 1
	}
	x[myIndex - 1].style.display = "block";
setTimeout(carousel, 5000);		
}






