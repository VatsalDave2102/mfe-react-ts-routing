import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import MainLayout from "home/MainLayout";
import PDPContent from "./PDPContent";

/**
 * Create a React Router instance with a single route.
 *
 * The route has a path of "/" and renders the MainLayout component.
 * It also has a child route with a path of "/products/:id" that renders the PDPContent component.
 */
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/products/:id",
				element: <PDPContent />,
			},
		],
	},
]);

/**
 * Get the root element from the DOM.
 *
 * This is the element where the React app will be rendered.
 */
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

/**
 * Create a React root instance from the root element.
 */
const root = ReactDOM.createRoot(rootElement as HTMLElement);

/**
 * Render the React Router provider component to the root element.
 *
 * This will render the entire app with routing.
 */
root.render(<RouterProvider router={router} />);
