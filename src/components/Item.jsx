import React from "react";

function Cart({ item }) {
	return (
		<div className="cart-item">
			<div className="item-container">
				<i className="ri-delete-bin-line"></i>
				<img src={item.url} width="130px" />
			</div>
			<p className="price">$5.99</p>
		</div>
	);
}

export default Cart;
