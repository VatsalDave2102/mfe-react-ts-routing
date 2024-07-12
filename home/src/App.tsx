/**
 * The main entry point of the React application.
 *
 * This file sets up the React Router and renders the main application layout.
 */

import React from "react";
import "remixicon/fonts/remixicon.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import MainLayout from "./MainLayout";

import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

/**
 * Creates a React Router instance with the defined routes.
 */
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <HomeContent />,
			},
			{
				path: "products/:id",
				element: <PDPContent />,
			},
			{
				path: "cart",
				element: <CartContent />,
			},
		],
	},
]);

/**
 * Gets the root HTML element where the React application will be rendered.
 *
 * @throws {Error} If the root element is not found.
 */
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

/**
 * Creates a React root instance and renders the React Router provider.
 */
const root = ReactDOM.createRoot(rootElement as HTMLElement);

/**
 * Renders the React Router provider with the defined routes.
 */
root.render(<RouterProvider router={router} />);
