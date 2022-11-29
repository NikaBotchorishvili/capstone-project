import React, { useContext } from "react";

import { Context } from "../context/Context";
function Cart({ item }) {
	const { removeCartItem } = useContext(Context)
	return (
		<div className="cart-item">
			<div className="item-container">
				<i onClick={() => removeCartItem(item.id)} className="ri-delete-bin-line"></i>
				<img src={item.url} width="130px" />
			</div>
			<p className="price">$5.99</p>
		</div>
	);
}

export default Cart;
