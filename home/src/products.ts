import { Product } from "./types";

const API_SERVER = "http://localhost:8080";

export const getProducts = async () => {
	try {
		const response = await fetch(`${API_SERVER}/products`);
		if (response.ok) {
			const products: Product[] = await response.json();
			return products;
		}
	} catch (error) {}
};

export const getProductById = async (id: string) => {
	try {
		const response = await fetch(`${API_SERVER}/products/${id}`);

		if (response.ok) {
			const product: Product = await response.json();
			return product;
		}
	} catch (error) {}
};

export const currency = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
