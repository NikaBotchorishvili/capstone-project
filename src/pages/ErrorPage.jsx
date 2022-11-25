import React from "react";
import { useRouteError } from "react-router-dom";
import "../css/app.css";
function ErrorPage() {
	const error = useRouteError();
	return (
		<div className="error-container">
			<h1>OOPS!</h1>
            <p>Sorry, an unexpected error happened!</p>

            <p>{ error.statusText }</p>
		</div>
	);
}

export default ErrorPage;
