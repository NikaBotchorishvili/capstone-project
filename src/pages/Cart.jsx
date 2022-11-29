import React, { useContext } from "react";

//	Context
import { Context } from "../context/Context";

//	Componets
import Item from "../components/Item";
function Cart() {
	const { cartItems } = useContext(Context);

	const cartItemElements = cartItems.map((item) => {
		return <Item key={item.id} item={item} />;
	});

	const totalPrice = (cartItems.length * 5.99).toLocaleString("GA", {
		style: "currency",
		currency: "Gel",
	});
	return cartItemElements.length > 0 ? (
		<main className="cart-page">
			<h1>Check out</h1>
			<div className="items-container">{cartItemElements}</div>
			<p className="total-cost">Total: { TotalPrice } </p>
			<div className="order-button">
				<button>Place Order</button>
			</div>
		</main>
	) : (
		<main className="cart-page">
			<h1>Looks like your cart is empty</h1>
		</main>
	);
}

export default Cart;
