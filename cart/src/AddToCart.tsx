import { addToCart, useLoggedIn } from "cart/cart";
import React from "react";

const AddToCart = ({ id }: { id: string }) => {
	const isLoggedIn = useLoggedIn();

	if (!isLoggedIn) return null;
	return (
		<button
			onClick={() => addToCart(id)}
			className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
		>
			Add To Cart
		</button>
	);
};

export default AddToCart;
