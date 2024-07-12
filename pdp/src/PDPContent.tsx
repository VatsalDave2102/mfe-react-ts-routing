import "tailwindcss/tailwind.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { Product } from "home/types";
import AddToCart from "cart/AddToCart";
import { getProductById, currency } from "home/products";

const PDPContent = () => {
	/**
	 * Get the product ID from the URL parameters using react-router-dom's useParams hook.
	 */
	const { id } = useParams();

	/**
	 * Initialize the product state to null.
	 */
	const [product, setProduct] = useState<Product | null>(null);

	/**
	 * Use the useEffect hook to fetch the product data when the component mounts.
	 *
	 * If the product ID is available, call the getProductById function and update the product state with the result.
	 */
	useEffect(() => {
		if (id) {
			getProductById(id).then(setProduct);
		}
	}, [id]);

	/**
	 * If the product data is not available, return null.
	 */
	if (!product) return null;

	/**
	 * Render the product details component.
	 *
	 * This component displays the product image, name, price, and description.
	 */
	return (
		<div className="grid grid-cols-2 gap-5">
			<div>
				<img src={product.image} alt={product.name} />
			</div>
			<div>
				<div className="flex">
					<h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
					<div className="font-bold text-3xl flex-end">
						{currency.format(product.price)}
					</div>
				</div>
				<AddToCart id={String(product.id)} />
				<div className="mt-10">{product.description}</div>
				<div className="mt-10">{product.longDescription}</div>
			</div>
		</div>
	);
};

export default PDPContent;
