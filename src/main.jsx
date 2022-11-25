import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";

//  Pages

import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

//	Components

import Header from "./components/Header";

//	Context

import ContextProvider from "./context/Context";

// CSS
import "./css/app.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Photos />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<ContextProvider>
				<RouterProvider router={router} />
			</ContextProvider>
		</React.StrictMode>
	</>
);
