import { client, urlFor } from "@/lib/sanity";
import AddToCartButton from "./AddToCartButton";
import Rating from "@/components/Rating";
import SizeButtons from "./SizeButtons";

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {_id, images, price, name, description, "slug": slug.current, "categoryName": category->name, rating, size, price_id}`;
    const data = await client.fetch(query);
    return data;
}

async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await getData(params.slug);

    return (
        <main className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">
            <div className="col-span-2 grid grid-cols-2 gap-3">
                {product.images.map((image: any, index: number) => (
                    <img key={index} className="rounded-lg" src={urlFor(image.asset._ref).url()} />
                ))}
            </div>

            <div>
                <h1 className="font-bold text-3xl mb-2">{product.name}</h1>
                <Rating value={product.rating} />
                <p className="text-3xl mt-10 font-semibold">${product.price}</p>

                <SizeButtons sizes={product.size} />
                <AddToCartButton product={product} />
                <p className="text-sm">{product.description}</p>
            </div>
        </main>
    );
}

export default ProductPage;
