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
	return (
		<main className="cart-page">
			<h1>Check out</h1>
			<div className="items-container">{cartItemElements}</div>
			<p className="total-cost">Total: </p>
			<div className="order-button">
				<button>Place Order</button>
			</div>
		</main>
	);
}

export default Cart;
