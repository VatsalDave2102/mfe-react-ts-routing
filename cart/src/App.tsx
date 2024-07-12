import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

// Import CartContent and MainLayout components
import CartContent from "cart/CartContent";
import MainLayout from "home/MainLayout";

// Create a router with a single route
const router = createBrowserRouter([
	{
		// Root path
		path: "/",
		// Render MainLayout component
		element: <MainLayout />,
		children: [
			{
				// Cart path
				path: "/cart",
				// Render CartContent component
				element: <CartContent />,
			},
		],
	},
]);

// Get the root element from the DOM
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

// Create a React root
const root = ReactDOM.createRoot(rootElement as HTMLElement);

// Render the RouterProvider component
root.render(<RouterProvider router={router} />);
