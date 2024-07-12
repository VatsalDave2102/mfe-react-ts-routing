import React from "react";

import { addToCart, useLoggedIn } from "cart/cart"; // Import functions from cart module

/**
 * AddToCart component
 *
 * Renders an "Add to Cart" button if the user is logged in
 */
const AddToCart = ({ id }: { id: string }) => {
	// Check if the user is logged in
	const isLoggedIn = useLoggedIn();

	// If the user is not logged in, return null
	if (!isLoggedIn) return null;

	// Render the "Add to Cart" button
	return (
		<button
			// Call addToCart function when button is clicked
			onClick={() => addToCart(id)}
			className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
		>
			Add To Cart
		</button>
	);
};

export default AddToCart;
