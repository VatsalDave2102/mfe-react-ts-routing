// Import Product type from ./types
import { Product } from "./types";

// API server URL
const API_SERVER = "http://localhost:8080";

// Function to get all products from the API
export const getProducts = async () => {
	try {
		// Fetch products from the API
		const response = await fetch(`${API_SERVER}/products`);
		if (response.ok) {
			// Parse response as JSON and return products array
			const products: Product[] = await response.json();
			return products;
		}
	} catch (error) {
		// Handle error
		console.log(error);
	}
};

// Function to get a product by ID from the API
export const getProductById = async (id: string) => {
	try {
		// Fetch product by ID from the API
		const response = await fetch(`${API_SERVER}/products/${id}`);

		if (response.ok) {
			// Parse response as JSON and return product
			const product: Product = await response.json();
			return product;
		}
	} catch (error) {
		// Handle error
		console.log(error);
	}
};

// Currency formatter for USD
export const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
