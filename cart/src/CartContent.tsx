import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";

// Import currency formatter from home/products
import { currency } from "home/products";

// Import cart-related functions and types from cart/cart
import { cart, clearCart, CartItem } from "cart/cart";

// Define the CartContent component
const CartContent = () => {
	// Initialize state to store cart items
	const [items, setItems] = useState<CartItem[]>([]);

	// Subscribe to cart updates and update state when cart changes
	useEffect(() => {
		const subscription = cart.subscribe((val) =>
			setItems(val?.cartItems ?? [])
		);
		return () => subscription.unsubscribe();
	}, []);

	// Log cart items to console for debugging
	console.log(items);

	return (
		<>
			{/* Grid container for cart items */}
			<div className="my-10 grid grid-cols-4 gap-5">
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
				<div className="text-right" id="grand_total">
					{currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
				</div>
			</div>
			{/* Clear cart and checkout buttons */}
			{items.length > 0 && (
				<div className="flex mb-10">
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
			)}
		</>
	);
};

// Export the CartContent component
export default CartContent;
