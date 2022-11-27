import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

function Image({ id, className, imageURL, isFavorite }) {
	const [hovered, setHovered] = useState(false);
	const { toggleFavorite } = useContext(Context);

	function handleMouseEnter() {
		setHovered(true);
	}

	function handleMouseLeave() {
		setHovered(false);
	}

	return (
		<div
			onMouseEnter={() => handleMouseEnter()}
			onMouseLeave={() => handleMouseLeave()}
			className={`${className} image-container`}
		>
			{isFavorite ? (
				<i
					onClick={() => toggleFavorite(id)}
					className="ri-heart-fill favorite"
				></i>
			) : (
				hovered && (
					<>
						<i
							onClick={() => toggleFavorite(id)}
							className="ri-heart-line favorite"
						></i>
						<i className="ri-add-circle-line cart"></i>
					</>
				)
			)}

			<img src={imageURL} className="image-grid" />
		</div>
	);
}

export default Image;
