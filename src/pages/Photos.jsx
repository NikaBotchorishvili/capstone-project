import React, { useContext } from "react";

//  Components

import Header from "../components/Header";
import Image from "../components/Image";

//	Context

import { Context as MainContext } from "../context/Context";

//	Utillities

import { GetClass } from "../utils/index";

function Photos() {
	const context = useContext(MainContext);
	return (
		<>
			<main className="photos">

					{context.Photos.map(({id, url}) => {
						return <Image key={id} imageURL={url} className={GetClass(id)} />;
					})}
			</main>
		</>
	);
}

export default Photos;
