// Import necessary types and libraries
import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";

import { Product } from "home/types";

// Define the API server URL
const API_SERVER = "http://localhost:8080";

// Define the CartItem interface, which extends the Product interface with a quantity property
export interface CartItem extends Product {
	quantity: number;
}

// Define the Cart interface, which contains an array of CartItem objects
export interface Cart {
	cartItems: CartItem[];
}

// Create a BehaviorSubject to store the JWT token
export const jwt = new BehaviorSubject(null);

// Create a BehaviorSubject to store the cart data
export const cart = new BehaviorSubject<Cart | null>(null);

/**
 * Get the cart data from the API server
 *
 * Returns a promise that resolves with the cart data
 */
export const getCart = () =>
	fetch(`${API_SERVER}/cart`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt.value}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			// Update the cart BehaviorSubject with the new data
			cart.next(res);
			return res;
		});

/**
 * Login to the API server
 *
 * Returns a promise that resolves with the JWT token
 */
export const login = (username: string, password: string) =>
	fetch(`${API_SERVER}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			// Update the jwt BehaviorSubject with the new token
			jwt.next(data.access_token);
			// Get the cart data after logging in
			getCart();
			return data.access_token;
		});

/**
 * Add a product to the cart
 *
 * Returns a promise that resolves when the cart data is updated
 */
export const addToCart = (id: string) =>
	fetch(`${API_SERVER}/cart`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt.value}`,
		},
		body: JSON.stringify({ id }),
	})
		.then((res) => res.json())
		.then(() => {
			// Get the updated cart data
			getCart();
		});

/**
 * Clear the cart
 *
 * Returns a promise that resolves when the cart data is updated
 */
export const clearCart = () =>
	fetch(`${API_SERVER}/cart`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt.value}`,
		},
	})
		.then((res) => res.json())
		.then(() => {
			// Get the updated cart data
			getCart();
		});

/**
 * Hook to check if the user is logged in
 *
 * Returns a boolean indicating whether the user is logged in
 */
export function useLoggedIn() {
	const [loggedIn, setLoggedIn] = useState(!!jwt.value);

	useEffect(() => {
		// Update the loggedIn state when the jwt token changes
		setLoggedIn(!!jwt.value);
		const subscription = jwt.subscribe(() => {
			setLoggedIn(!!jwt.value);
		});

		return () => subscription.unsubscribe();
	}, []);

	return loggedIn;
}
