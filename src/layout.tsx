import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './component/App';
// import { Home } from "./views/home";
// import { Bio } from "./component/Bio";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="principal">
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/Bio/:lang" element={<App />} />
						<Route path="/" element={<App />} />
						{/* <Route path="*" element={<h1>Not found!</h1>} />	 */}
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};
export default (Layout);