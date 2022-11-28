import React, { createContext, useState, useEffect } from "react";
import { json } from "react-router-dom";

const Context = createContext();

function ContextProvider({ children }) {
	const [Photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	async function getPhotos() {
		await fetch(
			"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
		)
			.then((res) => res.json())
			.then((value) => setPhotos(value));
	}

	useEffect(() => {
		getPhotos();
	}, []);

	function toggleFavorite(id) {
		setPhotos(() => {
			return Photos.map((photo) => {
				if (photo.id == id) {
					return { ...photo, isFavorite: !photo.isFavorite };
				}
				return photo;
			});
		});
	}

	function addCartItem(id) {
		const photo = Photos.filter((photo) => photo.id == id)[0];

		setCartItems((prevCartItems) => [...prevCartItems, photo]);
	}
	const ContextData = {
		Photos: Photos,
		setPhotos: setPhotos,
		toggleFavorite: toggleFavorite,
		addCartItem: addCartItem,
		cartItems: cartItems,
	};
	return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
