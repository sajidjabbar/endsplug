import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about/About";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";
import Stories_View from "../Pages/Stories/Stories_View";
import Welcome from "../Pages/auth/welcome";
const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/Story" element={<Stories_View />} />
				<Route path="/welcome" element={<Welcome />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
