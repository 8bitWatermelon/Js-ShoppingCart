let shoppingCart = [];

function addItemToCart(id_name) {
	let btnId = id_name;
	let btn = document.getElementById(btnId);
	let val = btn.innerText;

	shoppingCart.push(val);

	showCartItems();
}

function removeAllItem() {
	let reset = document.getElementById("cart");
	reset.innerHTML = " ";

	shoppingCart.length = 0;
}

function showCartItems() {
	let cart = document.getElementById("cart");
	cart.innerHTML = " ";

	for (let i = 0; i < shoppingCart.length; i++) {
		let element = document.createElement("div");
		element.innerText = shoppingCart[i];
		let cart = document.getElementById("cart");
		cart.appendChild(element);
	}
}
