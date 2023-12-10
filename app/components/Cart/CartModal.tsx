"use client";
import { useShoppingCart } from "use-shopping-cart";

function CartModal() {
    const { shouldDisplayCart, handleCloseCart, totalPrice, cartCount, cartDetails, removeItem, redirectToCheckout } =
        useShoppingCart();

    const handleCheckout = async () => {
        try {
            await redirectToCheckout();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className={`fixed right-0 top-0 h-screen w-[35rem] bg-neutral-50 shadow-xl transition-transform transform p-10 z-50 ${
                shouldDisplayCart ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl">Your Shopping Cart</h1>

                <button onClick={() => handleCloseCart()}>
                    <img className="w-8" src="/icons/x.svg" />
                </button>
            </div>

            <>
                {cartDetails &&
                    Object.values(cartDetails).map((item) => (
                        <div className="grid grid-cols-2 my-5 items-center" key={item.id}>
                            <div className="flex items-center">
                                <img className="w-16 mr-2" src={item.image} alt="item image" />

                                <div>
                                    <span className="font-bold">{item.name}</span>
                                    <p className="text-xs font-medium">QTY: {item.quantity}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <p className="font-semibold text-xl">${item.price}</p>

                                <button onClick={() => removeItem(item.id)}>
                                    <img className="w-5" src="/icons/trash.svg" alt="delete" />
                                </button>
                            </div>
                        </div>
                    ))}
            </>
            <hr className="my-5" />
            <>
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-bold text-xl">${totalPrice}</p>
                </div>

                <p className="text-sm italic">Taxes will be calculated at checkout</p>

                <button
                    onClick={handleCheckout}
                    disabled={cartCount === 0}
                    className="w-full py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 ease-in-out duration-300 mt-6 disabled:opacity-50"
                >
                    Checkout
                </button>
            </>
        </div>
    );
}

export default CartModal;
