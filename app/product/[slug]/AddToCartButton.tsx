"use client";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

function AddToCartButton({ product }: { product: any }) {
    const { addItem, handleCartClick } = useShoppingCart();

    const handleAddToCart = () => {
        addItem({
            name: product.name,
            description: product.description,
            id: product.price_id,
            price: product.price,
            currency: "USD",
            image: urlFor(product.images[0].asset._ref).url(),
        });
        handleCartClick();
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-neutral-900 rounded-full w-full text-white py-3 hover active:shadow-xl hover:bg-cyan-900 ease-in duration-150 my-10"
        >
            Add to Bag
        </button>
    );
}

export default AddToCartButton;
