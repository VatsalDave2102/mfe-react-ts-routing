/// <reference types="react" />
declare module "home/Header" {
    import React from "react";
    import "tailwindcss/tailwind.css";
    const Header: () => React.JSX.Element;
    export default Header;
}
declare module "home/Footer" {
    import React from "react";
    import "tailwindcss/tailwind.css";
    const Footer: () => React.JSX.Element;
    export default Footer;
}
declare module "home/types" {
    export interface Product {
        id: number;
        name: string;
        price: number;
        description: string;
        image: string;
        longDescription: string;
    }
}
declare module "home/products" {
    import { Product } from "home/types";
    export const getProducts: () => Promise<Product[]>;
    export const getProductById: (id: string) => Promise<Product>;
    export const currency: Intl.NumberFormat;
}
declare module "home/HomeContent" {
    import React from "react";
    import "tailwindcss/tailwind.css";
    const HomeContent: () => React.JSX.Element;
    export default HomeContent;
}
declare module "home/MainLayout" {
    import React from "react";
    import "remixicon/fonts/remixicon.css";
    import "./index.scss";
    const MainLayout: () => React.JSX.Element;
    export default MainLayout;
}
