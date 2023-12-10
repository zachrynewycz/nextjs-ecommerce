"use client";
import { useShoppingCart } from "use-shopping-cart";

function CartButton() {
    const { handleCartClick } = useShoppingCart();

    return (
        <button className="flex-1" onClick={() => handleCartClick()}>
            <img src="/icons/shopping-bag.svg" className="w-6 hover:scale-105 max-w-full max-h-full block m-auto" />
        </button>
    );
}

export default CartButton;
