import React from "react";
import "remixicon/fonts/remixicon.css";

import { Outlet } from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";

const MainLayout = () => (
	<div className="text-3xl mx-auto max-w-6xl">
		<Header />
		<div className="my-10">
			<Outlet />
		</div>
		<Footer />
	</div>
);

export default MainLayout;
