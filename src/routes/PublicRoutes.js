import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/about/About";
import Home from "../Pages/Home/Home";
import Privacy from "../Pages/Privacy/Privacy";
import Stories_View from "../Pages/Stories/Stories_View";
import Welcome from "../Pages/auth/welcome";
import Login from "../Pages/auth/Login";
import CreatePassword from "../Pages/auth/CreatePassword";
import DigitCode from "../Pages/auth/DigitCode";
import NewPassword from "../Pages/auth/NewPassword";
import CreateAccount from "../Pages/auth/CreateAccount";
import Test from "../Pages/auth/AccountStep/test";
import BecomeMember from "../Pages/auth/AccountStep/BecomeMember";
import ContactUs from "../Pages/contact-us/ContactUs";
const PublicRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/Story" element={<Stories_View />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/CreatePassword" element={<CreatePassword />} />
				<Route path="/DigitCode" element={<DigitCode />} />
				<Route path="/NewPassword" element={<NewPassword />} />
				<Route path="/CreateAccount" element={<CreateAccount />} />
				<Route path="/BecomeMember" element={<BecomeMember />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PublicRoutes;
