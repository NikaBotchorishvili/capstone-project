import React, { useContext } from "react";

//  Components

import Header from "../components/Header";
import Image from "../components/Image";

//	Context

import { Context as MainContext } from "../context/Context";

//	Utillities

import { GetClass } from "../utils/index";

function Photos() {
	const { Photos } = useContext(MainContext);
	return (
		<div className="photos-container">
			<h1>Images</h1>
			<main className="photos">

					{Photos.map((img) => {
						return <Image key={img.id} image={img} className={GetClass(img.id)} />;
					})}
			</main>
		</div>
	);
}

export default Photos;
