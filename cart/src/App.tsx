import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

import CartContent from "cart/CartContent";
import MainLayout from "home/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <CartContent />,
			},
			{
				path: "/cart",
				element: <CartContent />,
			},
		],
	},
]);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<RouterProvider router={router} />);
