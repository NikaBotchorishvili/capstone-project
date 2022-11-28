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
		<>
			<main className="photos">

					{Photos.map((img) => {
						return <Image key={img.id} image={img} className={GetClass(img.id)} />;
					})}
			</main>
		</>
	);
}

export default Photos;
