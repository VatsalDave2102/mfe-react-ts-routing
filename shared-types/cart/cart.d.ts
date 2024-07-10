/// <reference types="react" />
declare module "cart/cart" {
    import { Product } from "home/types";
    import { BehaviorSubject } from "rxjs";
    export interface CartItem extends Product {
        quantity: number;
    }
    export interface Cart {
        cartItems: CartItem[];
    }
    export const jwt: BehaviorSubject<any>;
    export const cart: BehaviorSubject<Cart>;
    export const getCart: () => Promise<any>;
    export const login: (username: string, password: string) => Promise<any>;
    export const addToCart: (id: string) => Promise<void>;
    export const clearCart: () => Promise<void>;
    export function useLoggedIn(): boolean;
}
declare module "cart/Login" {
    import React from "react";
    const Login: () => React.JSX.Element;
    export default Login;
}
declare module "cart/AddToCart" {
    import React from "react";
    const AddToCart: ({ id }: {
        id: string;
    }) => React.JSX.Element;
    export default AddToCart;
}
declare module "cart/MiniCart" {
    import React from "react";
    import "tailwindcss/tailwind.css";
    const MiniCart: () => React.JSX.Element;
    export default MiniCart;
}
