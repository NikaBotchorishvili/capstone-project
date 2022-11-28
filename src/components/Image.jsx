import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";
function Image({ image, className }) {
	const [hovered, setHovered] = useState(false);
	const { toggleFavorite, addCartItem, cartItems, removeCartItem } = useContext(
		Context
	);
	function handleMouseEnter() {
		setHovered(true);
	}

	function handleMouseLeave() {
		setHovered(false);
	}

	function heartIcon() {
		if (image.isFavorite) {
			return (
				<i
					onClick={() => toggleFavorite(image.id)}
					className="ri-heart-fill favorite"
				></i>
			);
		} else if (hovered) {
			return (
				<i
					onClick={() => toggleFavorite(image.id)}
					className="ri-heart-line favorite"
				></i>
			);
		}
	}

	function cartIcon(id) {
		const isAdded = cartItems.find((item) => item.id == id);
		if (isAdded) {
			return (
				<i
					onClick={() => removeCartItem(id)}
					className="ri-shopping-cart-fill cart"
				></i>
			);
		} else if (hovered) {
			return (
				<i
					className="ri-add-circle-line cart"
					onClick={() => addCartItem(image.id)}
				></i>
			);
		}
	}
	return (
		<div
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
			className={`${className} image-container`}
		>
			{cartIcon(image.id)}
			{heartIcon()}

			<img src={image.url} className="image-grid" />
		</div>
	);
}
Image.propTypes = {
	image: PropTypes.shape({
		id: PropTypes.any,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired,
	}),
	className: PropTypes.string,
};

export default Image;
