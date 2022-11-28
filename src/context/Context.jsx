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
		setPhotos(() =>
			Photos.map((photo) => {
				if (photo.id == id) {
					return { ...photo, isFavorite: !photo.isFavorite };
				}
				return photo;
			})
		);
	}

	function addCartItem(id) {
		const photo = Photos.filter((photo) => photo.id == id)[0];

		setCartItems((prevCartItems) => [...prevCartItems, photo]);
	}

	function removeCartItem(id) {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((item) => item.id != id)
		);
	}

	const ContextData = {
		Photos: Photos,
		cartItems: cartItems,
		setPhotos: setPhotos,
		toggleFavorite: toggleFavorite,
		addCartItem: addCartItem,
		removeCartItem: removeCartItem,
	};
	return <Context.Provider value={ContextData}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
