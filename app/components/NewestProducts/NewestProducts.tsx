import ProductCard from "@/[category]/ProductCard";
import MotionDivWrapper from "./MotionDivWrapper";
import { client } from "@/lib/sanity";

async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc)`;
    const data = await client.fetch(query);
    return data;
}

async function NewestProducts() {
    const products = await getData();

    return (
        <section className="max-w-7xl mx-auto py-28">
            <h1 className="font-bold text-3xl">Newest Products</h1>

            <div className="grid grid-cols-4 gap-7 mt-10">
                {products.map((product: any, index: number) => (
                    <MotionDivWrapper index={index} key={product._id}>
                        <ProductCard product={product} />
                    </MotionDivWrapper>
                ))}
            </div>
        </section>
    );
}

export default NewestProducts;
