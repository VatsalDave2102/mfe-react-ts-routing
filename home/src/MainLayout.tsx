import React from "react";
import "remixicon/fonts/remixicon.css";
import { Outlet } from "react-router-dom";

import "./index.scss";

// Import Header and Footer components from the home module
import Header from "home/Header";
import Footer from "home/Footer";

/**
 * MainLayout component that wraps the entire application.
 * It provides a basic layout structure with a header, footer, and outlet for rendering routes.
 */
const MainLayout = () => (
	// Container div with styles for the main layout
	<div className="text-3xl mx-auto max-w-6xl">
		<Header />
		<div className="my-10">
			<Outlet />
		</div>
		<Footer />
	</div>
);

export default MainLayout;
