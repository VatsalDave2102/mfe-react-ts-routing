import React from "react";
import ReactDOM from "react-dom/client";
import Header from "home/Header";
import Footer from "home/Footer";
import "remixicon/fonts/remixicon.css";
import "./index.scss";
import CartContent from "./CartContent";

const App = () => (
	<div className="text-3xl mx-auto max-w-6xl">
		<Header />
		<CartContent />
		<Footer />
	</div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
