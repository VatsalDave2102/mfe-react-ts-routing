import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Header = () => {
	return (
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
