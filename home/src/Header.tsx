import React from "react"; // Import React library
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

// Import Login and MiniCart components from cart module
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

/**
 * Header component for the Fidget Spinner World application.
 */
const Header = () => {
	return (
		// Container div with styles for the header
		<div className="p-5 bg-blue-500 text-3xl font-bold">
			<div className="flex">
				<div className="flex-grow flex text-white">
					<Link to="/">Fidget Spinner World</Link>
					<div className="mx-5">|</div>
					<Link id="cart" to="/cart">
						Cart
					</Link>
				</div>
				<div className="flex-end relative">
					<MiniCart />
					<Login />
				</div>
			</div>
		</div>
	);
};

export default Header;
