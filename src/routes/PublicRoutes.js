import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about/About";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";
import Stories_View from "../Pages/Stories/Stories_View";
import Welcome from "../Pages/auth/welcome";
import EditProduct from "../Pages/ProductActions/EditProduct";
import InviteLink from "../Pages/InviteLink/InviteLink";
const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/Story" element={<Stories_View />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/invite-link" element={<InviteLink />} />

				{/* Product Routes */}
				<Route path="/edit-product" element={<EditProduct />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
