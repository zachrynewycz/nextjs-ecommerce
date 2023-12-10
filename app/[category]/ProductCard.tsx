import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import Rating from "@/components/Rating";

function ProductCard({ product }: { product: any }) {
    return (
        <div className="cursor-pointer">
            <img src={urlFor(product.images[0]).url()} alt="Product Image" className="w-80 rounded-lg mb-3" />

            <Link
                href={`/product/${product.slug.current}`}
                className="font-bold hover:underline-offset-2 hover:underline"
            >
                {product.name}
            </Link>

            <Rating value={product.rating} showValue={false} />
            <p className="text-lg font-medium">${product.price}</p>
        </div>
    );
}

export default ProductCard;
