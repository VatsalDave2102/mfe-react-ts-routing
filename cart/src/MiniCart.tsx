import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";

import { CartItem, cart, clearCart } from "./cart";

import { currency } from "home/products";

// Define the MiniCart component
const MiniCart = () => {
	// Initialize state to store cart items
	const [items, setItems] = useState<CartItem[] | undefined>(undefined);
	// Initialize state to store whether the cart is shown
	const [showCart, setShowCart] = useState(false);

	// Subscribe to cart updates and update state when cart changes
	useEffect(() => {
		setItems(cart.value?.cartItems);
		const subscription = cart.subscribe((c) => setItems(c?.cartItems));
		return () => subscription.unsubscribe();
	}, []);

	// If no items in cart, return null
	if (!items) return null;

	// Render the mini cart
	return (
		<>
			{/* Toggle button to show/hide the cart */}
			<span
				onClick={() => setShowCart(!showCart)}
				id="showcart_span"
				className="text-white"
			>
				{/* Shopping cart icon */}
				<i className="ri-shopping-cart-2-fill text-2xl " id="showcart"></i>
				{/* Number of items in cart */}
				{items.length}
			</span>
			{/* Cart content */}
			{showCart && (
				<div
					className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
					style={{
						width: 300,
						top: "2rem",
						left: -250,
					}}
				>
					{/* Grid to display cart items */}
					<div
						className="grid gap-3 text-sm"
						style={{
							gridTemplateColumns: "1fr 3fr 10fr 2fr",
						}}
					>
						{items.map((item) => (
							<React.Fragment key={item.id}>
								{/* Quantity column */}
								<div>{item.quantity}</div>
								{/* Image column */}
								<img src={item.image} alt={item.name} className="max-h-6" />
								{/* Name column */}
								<div>{item.name}</div>
								{/* Price column */}
								<div className="text-right">
									{currency.format(item.quantity * item.price)}
								</div>
							</React.Fragment>
						))}
						{/* Empty columns for layout */}
						<div></div>
						<div></div>
						<div></div>
						{/* Grand total column */}
						<div>
							{currency.format(
								items.reduce((a, v) => a + v.quantity * v.price, 0)
							)}
						</div>
					</div>
					{/* Clear cart and checkout buttons */}
					<div className="flex">
						<div className="flex-grow">
							<button
								id="clearcart"
								className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
								onClick={clearCart}
							>
								Clear Cart
							</button>
						</div>
						<div className="flex-end">
							<button
								className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
								onClick={clearCart}
							>
								Checkout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MiniCart;
