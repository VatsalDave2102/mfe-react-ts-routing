import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponents";
import PDPContent from "./PDPContent";

const App = () => (
	<div className="text-3xl mx-auto max-w-6xl">
		<SafeComponent>
			<Header />
		</SafeComponent>
		<div className="my-10">
			<Outlet />
		</div>
		<Footer />
	</div>
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "products/:id",
				element: <PDPContent />,
			},
		],
	},
]);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<RouterProvider router={router} />);
