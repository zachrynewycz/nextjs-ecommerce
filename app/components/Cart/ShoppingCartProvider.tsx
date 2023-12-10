"use client";
import { ReactNode } from "react";
import { CartProvider as Cart } from "use-shopping-cart";

export default function ShoppingCartProvider({ children }: { children: ReactNode }) {
    return (
        <Cart
            mode="payment"
            cartMode="client-only"
            stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
            successUrl={`${process.env.NEXT_PUBLIC_DOMAIN as string}/stripe/success`}
            cancelUrl={`${process.env.NEXT_PUBLIC_DOMAIN as string}/stripe/error`}
            currency="USD"
            billingAddressCollection={false}
            shouldPersist={true}
        >
            {children}
        </Cart>
    );
}
