let cartIcon = document.querySelector('#cart-icon')
let cartIcon2 = document.querySelector('.cart-icon-2')
let cartIconAlert = document.querySelector('.see-more')
let cart = document.querySelector('.cart')
let cartClose = document.querySelector('#close-cart')


cartIcon2.onclick = () =>{
	cart.classList.add("active");
}
cartIcon.onclick = () =>{
	cart.classList.add("active");
}
cartClose.onclick = () =>{
	cart.classList.remove("active");
}

// search
const icons = document.querySelector('.icon-search');
const search=document.querySelector('.search');

    icons.onclick = function(){
		search.classList.toggle('active')
	}
// cart working
if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}

function ready(){
	var removeCartButtons = document.getElementsByClassName("cart-remove");
	console.log(removeCartButtons);
	for(var i=0;i<removeCartButtons.length;i++){
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
}

function removeCartItem(event){
	var btnClicked = event.target 
	btnClicked.parentElement.remove();
}

// add
var addCart = document.getElementsByClassName('add-cart');
for(var i = 0;i<addCart.length;i++){
	var button = addCart[i];
	button.addEventListener("click", addCartClicked);
}

function addCartClicked(event){
	var button = event.target
	var shopProducts = button.parentElement.parentElement.parentElement.parentElement;
	var title = shopProducts.getElementsByClassName('product-title')[0].innerHTML;
	var price = shopProducts.getElementsByClassName('product-cartPrice')[0].innerHTML;
	var productImg = shopProducts.getElementsByClassName('default-img')[0].src;

	addProductCart(title, price, productImg);
}
var alertBtn = document.querySelector('.alert');
// var close_alert = document.querySelector('.close-alert-btn')
// close_alert.onclick = () =>{
// 	alertBtn.classList.remove("show");
// };

// cartIconAlert.onclick = () =>{
// 	cart.classList.add("active");
// 	alertBtn.classList.remove("show");
// }

function addProductCart(title, price, productImg){
	var cartShopBox = document.createElement('div')
	cartShopBox.classList.add('cart-box')
	var cartItems = document.getElementsByClassName('cart-content')[0];
	var seeMore = document.querySelector('.see-more')
	var haohan = document.querySelector('.alert-title')

	const storeitems = document.getElementById("cart-content")
	const product  = document.querySelectorAll(".cart-box")
	const pname = storeitems.getElementsByTagName("h4")

	// for (var i = 0; i < pname.length; i++) {
	// 	let match = product[i].getElementsByClassName('product-title')[0];
	// 	if(match.innerHTML == title){	
	// 		alertBtn.classList.add('show')
	// 		haohan.innerHTML = "This item is already in your cart"
	// 		setTimeout(function(){alertBtn.classList.remove('show')}, 8000)		
	// 		$(window).resize(function(){
	// 	     var width = $(window).width();
	// 	    console.log(width);
	// 	    if (width >= 768 && width<=820){
	// 	        alertBtn.style.width="25%"
	// 	    }else if (width <= 768){
	// 	    		alertBtn.style.width="100%"
	// 	    }})
		
	// 		return;
	// 	}else{
	// 		alertBtn.classList.add('show')
	// 		setTimeout(function(){alertBtn.classList.remove('show')}, 8000)
			
	// 		haohan.innerHTML = "You have add this car on your cart"
	// 		haohan.style.color = "white"
	// 		$(window).resize(function(){
	// 	     var width = $(window).width();
	// 	    console.log(width);
	// 	    if (width >= 768 && width<=820){
	// 	        alertBtn.style.width="27%"
	// 	    }else if (width <= 768){
	// 	    		alertBtn.style.width="100%"
	// 	    }})
	// 	}
	// }
	
	var cartBoxContent='<div class="cart-box-detail"><h4 class="h4-tagName">'+title+'</h4><h3 class="price-car">'+price+'</h3></div><img class="cart-img" src="'+productImg+'"><i class="ri-delete-bin-line cart-remove"></i>';
	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox)
	cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);


}
