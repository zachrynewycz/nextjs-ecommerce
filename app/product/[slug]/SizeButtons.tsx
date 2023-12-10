"use client";
import { useState } from "react";

function SizeButtons({ sizes }: { sizes: any }) {
    const [selectedSize, setSelectedSize] = useState<string>("");

    return (
        <div>
            <p className="mt-5 mb-1">Size: {selectedSize}</p>
            <div className="grid grid-cols-3 gap-1.5">
                {sizes.map((size: any, index: number) => (
                    <button
                        onClick={() => setSelectedSize(size)}
                        className={`bg-neutral-200  text-center font-medium py-2 rounded-md hover:bg-neutral-300 ${
                            selectedSize === size && "bg-neutral-400"
                        } `}
                        key={index}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SizeButtons;
