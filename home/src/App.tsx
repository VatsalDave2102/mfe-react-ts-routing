import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import MainLayout from "./MainLayout";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

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

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<RouterProvider router={router} />);
