import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from 'prop-types';
function Image({ id, className, imageURL, isFavorite }) {
	const [hovered, setHovered] = useState(false);
	const { toggleFavorite } = useContext(Context);

	function handleMouseEnter() {
		setHovered(true);
	}

	function handleMouseLeave() {
		setHovered(false);
	}

	function heartIcon() {
		if (isFavorite) {
			return (
				<i
					onClick={() => toggleFavorite(id)}
					className="ri-heart-fill favorite"
				></i>
			);
		} else if (hovered) {
			return (
				<i
					onClick={() => toggleFavorite(id)}
					className="ri-heart-line favorite"
				></i>
			);
		}
	}

	const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;
	return (
		<div
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
			className={`${className} image-container`}
		>
			{cartIcon}
			{heartIcon()}

			<img src={imageURL} className="image-grid" />
		</div>
	);
}
Image.propTypes = {
	id: PropTypes.any,
	className: PropTypes.string,
	imageURL: PropTypes.string.isRequired,
	isFavorite: PropTypes.bool.isRequired
}
export default Image;
